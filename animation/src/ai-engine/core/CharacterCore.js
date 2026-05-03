import { MemoryBank } from '../memory/MemoryBank.js';
import { Personality } from '../traits/Personality.js';
import { IKController } from '../motor/IKController.js';
import { BehaviorTree } from '../behavior/BehaviorTree.js';
import { AudioEngine } from '../audio/AudioEngine.js';
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-backend-webgl";

export class CharacterCore {
  constructor(bones, model) {
    this.bones = bones;
    this.model = model;
    
    this.memory = new MemoryBank();
    this.personality = new Personality();
    this.ik = new IKController(bones);
    this.behaviorTree = new BehaviorTree(this);
    
    this.targetAttention = { x: 0, y: 0 };
    this.userPosition = { x: 0, y: 0 }; 
    this.facePosition = { x: 0, y: 0 };
    
    this.emotion = "idle";
    this.targetEmotionX = 0;
    this.targetEmotionZ = 0;
    
    this.audioEngine = new AudioEngine();
    
    this.attentionTimer = 0;
    this.breathing = 0;
    this.blink = { timer: 0, next: 2 + Math.random() * 4, phase: "idle", value: 0 };

    this.initFaceTracking();
    this.initSpeechRecognition();
    
    console.log("🧠 AI Engine (CharacterCore) initialized successfully. Behavioral components active.");
  }

  async initFaceTracking() {
    try {
      this.faceMesh = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
      );

      const video = document.createElement("video");
      video.style.display = "none";
      document.body.appendChild(video);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      await video.play();

      const detect = async () => {
        const faces = await this.faceMesh.estimateFaces({ input: video });
        if (faces.length > 0) {
          const nose = faces[0].scaledMesh[1];
          this.facePosition.x = (nose[0] / video.videoWidth - 0.5) * 2;
          this.facePosition.y = (nose[1] / video.videoHeight - 0.5) * 2;
        }
        requestAnimationFrame(detect);
      };
      detect();
    } catch (e) {
      console.warn("Face tracking disabled", e);
    }
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.start();

    rec.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript.toLowerCase();
      if (text.includes("angry")) this.emotion = "angry";
      if (text.includes("calm")) this.emotion = "idle";
      if (text.includes("curious")) this.emotion = "curious";
    };
  }

  bark() {
    this.audioEngine.playSound(this.emotion, this.personality.traits);
    
    // Also use Web Speech synthesis as an overlay if needed, but audio engine handles procedural sounds now.
    const msg = new SpeechSynthesisUtterance();
    if (this.emotion === "angry" || this.personality.traits.aggression > 0.6) {
      msg.text = "Grrr!";
      msg.pitch = 0.5;
    } else {
      msg.text = "Woof!";
      msg.pitch = 1.5;
    }
    msg.rate = 1;
    // speechSynthesis.speak(msg); // Optional fallback
  }

  interact(type) {
    this.memory.recordInteraction(type, 1);
    if (type === 'play' || type === 'pet') {
      this.emotion = "curious";
      this.bark();
    } else if (type === 'feed') {
      this.emotion = "idle";
      this.bark();
    } else if (type === 'hit') {
      this.emotion = "angry";
      this.bark();
    }
  }

  tick(delta, time) {
    this.personality.updateTraits(this.memory);

    // Attention logic
    this.attentionTimer -= delta;
    if (this.attentionTimer <= 0) {
      this.targetAttention.x = (Math.random() - 0.5) * 0.6;
      this.targetAttention.y = (Math.random() - 0.5) * 0.4;
      this.attentionTimer = 2 + Math.random() * 3;
    }

    // Blend face + mouse + attention
    const MAX_Y = 0.32;
    const MAX_X = 0.15;
    const combinedTargetX = this.userPosition.y * MAX_X + this.facePosition.y; // X rotation maps to Y movement
    const combinedTargetY = this.userPosition.x * MAX_Y + this.facePosition.x + this.targetAttention.x;

    // Behavior tree computes targetEmotion offsets based on state
    this.behaviorTree.evaluate(delta);

    // Micro expressions - Breathing
    this.breathing += delta * 2;
    const scale = 1 + Math.sin(this.breathing) * 0.01;
    this.model.scene.scale.set(scale, scale, scale);

    if (Math.random() > 0.95) {
      this.ik.applySaccadeOffset();
    }

    // Blinking Logic
    const b = this.blink;
    b.timer += delta;
    if (b.phase === "idle" && b.timer > b.next) {
      b.phase = "closing";
      b.timer = 0;
    }
    if (b.phase === "closing") {
      b.value += delta * 6;
      if (b.value >= 1) { b.value = 1; b.phase = "opening"; }
    }
    if (b.phase === "opening") {
      b.value -= delta * 3;
      if (b.value <= 0) {
        b.value = 0; b.phase = "idle"; b.timer = 0;
        b.next = 2 + Math.random() * 4;
        if (Math.random() < 0.15) b.next = 0.2; // Double blink
      }
    }
    if (this.bones.lidL && this.bones.lidR) {
      const amount = b.value * 0.45;
      this.bones.lidL.rotation.x = amount;
      this.bones.lidR.rotation.x = amount + 0.03;
    }

    // Auto-curious on mouse hover (Environment Behavioral Awareness)
    const d = Math.abs(this.userPosition.x) + Math.abs(this.userPosition.y);
    if (this.emotion !== "angry") {
      if (d < 0.2) this.emotion = "curious";
      else this.emotion = "idle";
    }

    // Visual Environment Awareness (Light detection for squinting)
    let brightLightDetected = false;
    this.model.scene.traverse((obj) => {
      if (obj.isLight && obj.intensity > 3) brightLightDetected = true;
    });

    if (brightLightDetected && this.emotion !== "angry") {
      this.ik.squintAmount = 0.6; // Pass to IK
    } else {
      this.ik.squintAmount = 0;
    }

    // Micro head movements (sine wave based) when idle

    let microZ = 0;
    let microX = 0;
    if (this.emotion === "idle") {
      microZ = Math.sin(time * 0.5) * 0.02;
      microX = Math.cos(time * 0.3) * 0.01;
    }

    // Apply IK (with micro movements added to emotion offsets)
    this.ik.update(delta, combinedTargetX, combinedTargetY, this.targetEmotionX + microX, this.targetEmotionZ + microZ, this.personality.traits.curiosity);
  }
}
