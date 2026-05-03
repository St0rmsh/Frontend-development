export class AudioEngine {
  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
    }
    this.lastSoundTime = 0;
  }

  playSound(emotion, traits) {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    if (now - this.lastSoundTime < 0.5) return; // Debounce
    this.lastSoundTime = now;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    let duration = 0.2;

    if (emotion === "angry" || traits.aggression > 0.6) {
      // Growl / Sharp Bark
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
      
      filter.type = "lowpass";
      filter.frequency.value = 800;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.8, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      duration = 0.3;
    } else if (emotion === "curious" || traits.curiosity > 0.6) {
      // Chirp / Whine
      osc.type = "sine";
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.4);
      
      filter.type = "bandpass";
      filter.frequency.value = 1200;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      duration = 0.4;
    } else {
      // Happy Bark
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.15);
      
      filter.type = "lowpass";
      filter.frequency.value = 2000;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.6, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      duration = 0.15;
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(now + duration);
  }
}
