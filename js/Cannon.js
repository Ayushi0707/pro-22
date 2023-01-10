class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canonimg = loadImage("./assets/canon.png");
    this.canonbaseimg = loadImage("./assets/cannonBase.png");
  }
  show(){
    //Cannon top
    push();
      imageMode(CENTER);
      image(this.canonimg,this.x,this.y,this.width,this.height,this.angle);
    pop();

    //Cannon Base
    image(this.canonbaseimg,70,20,200,200);
    noFill();
  }
}
