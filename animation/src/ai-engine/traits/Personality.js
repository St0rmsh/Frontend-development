export class Personality {
  constructor(initialTraits = { loyalty: 0.5, aggression: 0.1, curiosity: 0.8 }) {
    this.traits = initialTraits;
  }

  updateTraits(memory) {
    // Modify traits based on memory
    if (memory.trustLevel > 0.8) {
      this.traits.loyalty = Math.min(1.0, this.traits.loyalty + 0.01);
      this.traits.aggression = Math.max(0.0, this.traits.aggression - 0.01);
    } else if (memory.trustLevel < 0.3) {
      this.traits.aggression = Math.min(1.0, this.traits.aggression + 0.01);
    }
  }
}
