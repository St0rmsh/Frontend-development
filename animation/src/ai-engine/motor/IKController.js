import * as THREE from 'three';

export class IKController {
  constructor(bones) {
    this.bones = bones;
    this.headMax = 0.28;
    this.neckStiffness = 0.08;
    this.neckDamping = 0.85;
    this.eyeLimitX = 0.32;
    this.eyeLimitY = 0.12;

    // Internal state to avoid animation mixer overwrites
    this.currentHeadRot = { x: 0, y: 0, z: 0 };
    this.currentEyeLRot = { x: 0, y: 0 };
    this.currentEyeRRot = { x: 0, y: 0 };
    
    // Squint control (from Environment Awareness)
    this.squintAmount = 0;

    // Tail Physics setup
    this.tailBones = bones.tail || [];
    this.tailSprings = this.tailBones.map(() => ({ rot: 0, vel: 0 }));
  }

  update(delta, targetX, targetY, emotionTargetX, emotionTargetZ, curiosityLevel) {
    if (!this.bones.head) return; // Only abort if head is missing

    // Safeguard against NaN from uninitialized face/mouse logic
    const safeTargetY = isNaN(targetY) ? 0 : targetY;
    const safeTargetX = isNaN(targetX) ? 0 : targetX;
    const safeEmotionX = isNaN(emotionTargetX) ? 0 : emotionTargetX;
    const safeEmotionZ = isNaN(emotionTargetZ) ? 0 : emotionTargetZ;

    // Head IK with anticipation/smoothness
    const targetYRot = THREE.MathUtils.clamp(safeTargetY, -this.headMax, this.headMax);
    const targetXRot = THREE.MathUtils.clamp(safeTargetX, -this.headMax, this.headMax);

    this.currentHeadRot.y = THREE.MathUtils.lerp(this.currentHeadRot.y, targetYRot, this.neckStiffness);
    this.currentHeadRot.x = THREE.MathUtils.lerp(this.currentHeadRot.x, targetXRot + safeEmotionX, this.neckStiffness);
    this.currentHeadRot.z = THREE.MathUtils.lerp(this.currentHeadRot.z, safeEmotionZ, this.neckStiffness);

    this.bones.head.rotation.y = this.currentHeadRot.y;
    this.bones.head.rotation.x = this.currentHeadRot.x;
    this.bones.head.rotation.z = this.currentHeadRot.z;

    if (this.bones.eyeL && this.bones.eyeR) {
      // Eye IK
      const targetEyeX = THREE.MathUtils.clamp(safeTargetY, -this.eyeLimitX, this.eyeLimitX);
      const targetEyeY = THREE.MathUtils.clamp(-safeTargetX, -this.eyeLimitY, this.eyeLimitY);

      this.currentEyeLRot.y = THREE.MathUtils.lerp(this.currentEyeLRot.y, targetEyeX * 0.85, 0.12);
      this.currentEyeRRot.y = THREE.MathUtils.lerp(this.currentEyeRRot.y, targetEyeX * 0.85, 0.12);
      this.currentEyeLRot.x = THREE.MathUtils.lerp(this.currentEyeLRot.x, targetEyeY * 0.6, 0.12);
      this.currentEyeRRot.x = THREE.MathUtils.lerp(this.currentEyeRRot.x, targetEyeY * 0.6, 0.12);

      // Apply squinting based on light / environment
      const squint = THREE.MathUtils.lerp(0, 0.25, this.squintAmount);
      
      this.bones.eyeL.rotation.y = this.currentEyeLRot.y;
      this.bones.eyeR.rotation.y = this.currentEyeRRot.y;
      this.bones.eyeL.rotation.x = this.currentEyeLRot.x - squint;
      this.bones.eyeR.rotation.x = this.currentEyeRRot.x - squint;
    }

    // 6. Tail Physics (Procedural Spring Simulation)
    if (this.tailBones.length > 0) {
      const wagSpeed = emotionTargetZ > 0.1 ? 15 : (curiosityLevel > 0.5 ? 2 : 0);
      const wagAmount = emotionTargetZ > 0.1 ? 0.3 : (curiosityLevel > 0.5 ? 0.1 : 0.05);
      const isAngry = safeEmotionX > 0.2; // Stiff
      
      const time = performance.now() * 0.001;
      let targetBaseTail = isAngry ? 0.2 : (Math.sin(time * wagSpeed) * wagAmount);

      for (let i = 0; i < this.tailBones.length; i++) {
          const spring = this.tailSprings[i];
          let target = i === 0 ? targetBaseTail : this.tailSprings[i-1].rot * 0.8;
          
          const force = (target - spring.rot) * 0.1; // Stiffness
          spring.vel = (spring.vel + force) * 0.8;   // Damping
          spring.rot += spring.vel;
          
          this.tailBones[i].rotation.y = spring.rot;
          this.tailBones[i].rotation.z = spring.rot * 0.5;
      }
    }
  }

  applySaccadeOffset() {
    if (!this.bones.head) return;
    this.bones.head.rotation.y += (Math.random() - 0.5) * 0.02;
    this.bones.head.rotation.x += (Math.random() - 0.5) * 0.02;
  }
}
