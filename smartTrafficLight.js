class SmartTrafficLight {
    constructor(st1, st2) {
      //
      this.st1Cars = st1[0];
      this.st1Name = st1[1];
      this.st2Cars = st2[0];
      this.st2Name = st2[1];
      
    }
    
    turngreen() {
      if (this.st1Cars > this.st2Cars) {
        this.st1Cars = 0;
        return this.st1Name;
      }
      else if (this.st1Cars < this.st2Cars){
        this.st2Cars = 0;
        return this.st2Name;
      }
      else return null;
    }
  }