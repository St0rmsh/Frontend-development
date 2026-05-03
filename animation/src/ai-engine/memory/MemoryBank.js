export class MemoryBank {
  constructor() {
    this.interactions = [];
    this.trustLevel = 0.5; // 0.0 to 1.0
  }

  recordInteraction(type, value) {
    this.interactions.push({ type, value, time: Date.now() });
    
    if (type === 'feed') this.trustLevel = Math.min(1.0, this.trustLevel + 0.1);
    if (type === 'pet') this.trustLevel = Math.min(1.0, this.trustLevel + 0.15);
    if (type === 'hit') this.trustLevel = Math.max(0.0, this.trustLevel - 0.3);
  }
}
