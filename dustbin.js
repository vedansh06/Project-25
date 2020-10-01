class Dustbin {

    constructor(x, y, width, height){
        var options = {
            'restitution': 0.8,
            'friction': 5.0,
             isStatic:true,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.dustbin = loadImage("sprites/dustbin.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y); 
        rotate(angle);   
        fill("white");
        imageMode(CENTER);
        image(this.dustbin, 0, 0, this.width, this.height);  
        pop(); 
    }
}