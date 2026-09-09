interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(protected width: number, protected height: number) { }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(protected side: number) { }

  setSide(side: number): void {
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

function resizeRectangle(shape: Shape): void {
  console.log(`Area esperada: 50. Area obtenida: ${shape.area()}`);
}
resizeRectangle(new Rectangle(25, 2));
resizeRectangle(new Square(5));

