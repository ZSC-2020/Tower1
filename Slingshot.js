class SlingShot{
constructor(bodyA,pointB){
 var option={
  bodyA:bodyA,
  pointB:pointB,
  stiffness:0.02,
  length:30,
 }
 
 this.pointB=pointB;
 this.sling=Constraint.create(option);
 World.add(world,this.sling);
}
fly(){
this.sling.bodyA=null

}

display(){
    
if(this.sling.bodyA){

   
var pointA=this.sling.bodyA.position
var pointB=this.pointB

push()
strokeWeight(10);
stroke(43,200,8)
line(pointA.x,pointA.y,pointB.x,pointB.y)


pop()
}
}

}