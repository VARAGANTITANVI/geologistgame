class Sand
{
    constructor(x, y, radius)
    {
        var options = {
         //'restitution':0.6,
         //'friction':0.3,
         //'density':0.8
        }  
        this.body = Bodies.circle(x, y, radius, options);
        this.radius= radius;
        World.add(world, this.body);
      }

 display()
  {
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(RADIUS);
    strokeWeight(4);
    stroke("black");
    fill("brown");
    circle(0, 0, this.radius);
    pop();
  }  
}
