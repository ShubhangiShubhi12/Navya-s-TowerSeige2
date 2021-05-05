class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':0.0008,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.img = loadImage("block.png");
        this.Visibility = 255;
        World.add(world, this.body);
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
            var angle = this.body.angle;
            var pos= this.body.position;
    
            if(this.body.speed<2.8){
              push();
              translate(pos.x, pos.y);
              rotate(angle);
              imageMode(CENTER);
              image(this.img,0,0,this.width, this.height);
              pop();
            }
            else{
              //do nothing
              World.remove(world,this.body);
              push();
              this.Visibility = this.Visibility-5;
              tint(255,this.Visibility);
              image(this.img,this.body.position.x,this.body.position.y,this.width, this.height);
              pop();
            }
          }
}