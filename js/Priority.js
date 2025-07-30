class Priority {
  static get HIGH() { return 'High'; }
  static get MEDIUM() { return 'Medium'; }
  static get LOW() { return 'Low'; }

  static getAll() {
    return [this.HIGH, this.MEDIUM, this.LOW];
  }

  static isValid(priority) {
    return this.getAll().includes(priority);
  }
}