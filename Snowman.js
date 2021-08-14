class Snowman {
    constructor(x,y,r){

        var options = {
            density: 0.8,
            isStatic: false,
            restituion:1.0,
            friction: 1.0
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world,this.body);

    }

    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        stroke("lightblue");
        strokeWeight(3)
        fill("white");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}