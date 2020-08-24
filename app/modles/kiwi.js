class Kiwi {
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

export let karen = new Kiwi("Karen", "borwn", "plants", "complains", true)