class Shapes {
  constructor(){
    this.color = ''
  }
  setColor(color){
    this.color = (color);
  }
}

class Circle extends Shape {
  render(){
    return <circle cx="50%" r="75" cy="50%" height="100%" width="100%" fill='${this.color}'></circle>
  }
}