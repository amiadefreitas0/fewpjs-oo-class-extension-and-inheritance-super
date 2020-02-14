class Pet {
    constructor(name) {
      this._name = name;
      this._owner = null;
    }
  
    get name() {
      return this._name;
    }
  
    get owner() {
      return this._owner;
    }
  
    set owner(owner) {
      this._owner = owner;
    }
  
    get speak() {
      return `${this.name} speaks.`;
    }
}
class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    static definition() {
      return (
        super.definition() + ' Dogs are one of the most common types of pets.'
      );
    }
}
  
let creature = new Pet('The Thing');
let dog = new Dog('Spot', 'foxhound');
  
Pet.definition();
Dog.definition();