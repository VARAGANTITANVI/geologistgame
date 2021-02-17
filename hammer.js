class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.9,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 160, 30, options);
      this.width = 160;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
