
class BaseClass {
    constructor(name) {
      this.name = name;
    }
  
    display() {
      console.log(Base Class: ${this.name});
    }
  }
  
  
  class SubClassA1 extends BaseClass {
    constructor(name, attribute1) {
      super(name);
      this.attribute1 = attribute1;
    }
  
    display() {
      console.log(SubClassA1: ${this.name}, Attribute: ${this.attribute1});
    }
  }
  

  class SubClassA2 extends BaseClass {
    constructor(name, attribute2) {
      super(name);
      this.attribute2 = attribute2;
    }
  
    display() {
      console.log(SubClassA2: ${this.name}, Attribute: ${this.attribute2});
    }
  }
  

  class SubClassB1 extends SubClassA1 {
    constructor(name, attribute1, attributeB1) {
      super(name, attribute1);
      this.attributeB1 = attributeB1;
    }
  
    display() {
      console.log(SubClassB1: ${this.name}, Attribute1: ${this.attribute1}, AttributeB1: ${this.attributeB1});
    }
  }
  

  class SubClassB2 extends SubClassA2 {
    constructor(name, attribute2, attributeB2) {
      super(name, attribute2);
      this.attributeB2 = attributeB2;
    }
  
    display() {
      console.log(SubClassB2: ${this.name}, Attribute2: ${this.attribute2}, AttributeB2: ${this.attributeB2});
    }
  }
  

  class SubClassC1 extends SubClassB1 {
    constructor(name, attribute1, attributeB1, attributeC1) {
      super(name, attribute1, attributeB1);
      this.attributeC1 = attributeC1;
    }
  
    display() {
      console.log(SubClassC1: ${this.name}, Attribute1: ${this.attribute1}, AttributeB1: ${this.attributeB1}, AttributeC1: ${this.attributeC1});
    }
  }
  

  class SubClassC2 extends SubClassB2 {
    constructor(name, attribute2, attributeB2, attributeC2) {
      super(name, attribute2, attributeB2);
      this.attributeC2 = attributeC2;
    }
  
    display() {
      console.log(SubClassC2: ${this.name}, Attribute2: ${this.attribute2}, AttributeB2: ${this.attributeB2}, AttributeC2: ${this.attributeC2});
    }
  }
  

  const base = new BaseClass("Base");
  base.display();
  
  const subA1 = new SubClassA1("SubA1", "Value A1");
  subA1.display();
  
  const subA2 = new SubClassA2("SubA2", "Value A2");
  subA2.display();
  
  const subB1 = new SubClassB1("SubB1", "Value A1", "Value B1");
  subB1.display();
  
  const subB2 = new SubClassB2("SubB2", "Value A2", "Value B2");
  subB2.display();
  
  const subC1 = new SubClassC1("SubC1", "Value A1", "Value B1", "Value C1");
  subC1.display();
  
  const subC2 = new SubClassC2("SubC2", "Value A2", "Value B2", "Value C2");
  subC2.display();