class Shape {
  constructor(){
    this.color = ''
  }
  setColor(color){
    this.color = (color);
  }
}

class Circle extends Shape {
  renderShape(){
    return `<circle cx="50%" r="75" cy="50%" height="100%" width="100%" fill='${this.color}'>`
  }
};

class Square extends Shape {
  renderShape() {
    return `<rect x="50" height="150" width="150" fill="${this.color}"></rect>`;
  }
};

class Triangle extends Shape {
  renderShape(){
    return `<polygon points="0, 150 250, 150 100, 0" fill="${this.color}">`
  }
};

module.exports = {
Circle,
Square,
Triangle
}