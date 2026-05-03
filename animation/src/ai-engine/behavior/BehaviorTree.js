export class BehaviorTree {
  constructor(core) {
    this.core = core;
  }

  evaluate(delta) {
    // Simple selector logic based on current emotion
    if (this.core.emotion === "angry") {
      this.core.targetEmotionX = 0.3;
      this.core.targetEmotionZ = 0;
    } else if (this.core.emotion === "curious") {
      this.core.targetEmotionX = 0;
      this.core.targetEmotionZ = 0.2 * Math.sin(performance.now() * 0.002);
    } else {
      this.core.targetEmotionX = 0;
      this.core.targetEmotionZ = 0;
    }
  }
}
