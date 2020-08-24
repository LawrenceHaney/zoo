class Jellyfish {
    constructor(name, color, diet, verb,pulse){
      this.name = name;
      this.color = color;
      this.diet = diet;
      this.verb = verb;
      this.pulse = pulse
    }
    status(){
      return `${this.name} is ${this.color}`
    }
    feed(){
      return `${this.name} wants ${this.diet}`
    }
    action(){ return `${this.name} ${this.verb}`
}
}

export let jeff = new Jellyfish("Jeff", "white", "fish", "stings", true)