class LFO {
  constructor() {
    this.itr = 0;
    this.val = 0;
  }
  animate() {
    this.itr++;
  }
  value() {
    return this.val;
  }
  iValue() {
    return this.val * -1;
  }
}

class LFORnd extends LFO {
  constructor() {
    super();
  }
  animate() {
    this.itr++;
    this.val = Math.random() - 0.5;
  }
}

class LFOLin extends LFO {
  constructor() {
    super();
    this.max = 0.002;
    this.min = -0.002;
    this.inc = 0.00005;
  }
  animate() {
    this.itr++;
    this.val += this.inc;
    if(this.val >= this.max || this.val <= this.min)
      this.inc = this.inc * -1;
  }
}
