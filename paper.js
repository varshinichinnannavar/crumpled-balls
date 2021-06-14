class  paper {
    constructor(x,y){
        var opstions={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image=loadImage("sprites/paper.png")
        this.body=Bodies.circle(this.x,this.y,opstions)
        World.add(world,this.body)
    }

    display()
	{

        var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

        push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}
    
}