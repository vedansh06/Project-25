class Paper {
 
    constructor(x,y,diameter){
      var options={
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.diameter = diameter;
      this.body = Bodies.circle(x, y, this.diameter/2, options);
      this.paper = loadImage("sprites/paper.png");
      World.add(world, this.body);
      
    }

    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    imageMode(CENTER);
    image(this.paper, 0, 0, this.diameter, this.diameter);
    //console.log("Hello");
    pop(); 
    }
}