class stone {
    constructor(x, y, w, h) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var stonePos = this.body.position;
        push()
        translate(stonePos.x, stonePos.y);
        // rectMode(CENTER);
        rotate(this.body.angle)
        fill(255, 0, 255)
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image, 0, 0, this.x, this.y)
        pop()
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
    }
}