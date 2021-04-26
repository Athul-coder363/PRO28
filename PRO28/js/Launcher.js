class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
           stiffness: 0.04,
           length: 10
        }
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }
    attach(body){
        this.sling.bodyA=body
       }
     fly(){
       this.Launcher.bodyA=null;
    }

    display(){
        if(this.Launcher.bodyA){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.Launcher.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
        
    }
    
}