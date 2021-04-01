class Game{
    constructor(){

    }
    getState(){
        var state=database.ref("gameState");
        state.on ("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        form=new Form ();
        form.display();
}
    car1=createSprite(100,200);
    car1.addImage(car1Img)
    car2=createSprite(300,200);
    car2.addImage(car2Img)
    car3=createSprite(500,200);
    car3.addImage(car3Img)
    car4=createSprite(700,200);
    car4.addImage(car4Img)
    cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        if(allPlayers!=undefined){
            background(ground);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0,x=200,y;

            for(var plr in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x ;
            cars[index-1].y=y
            
            if(index===player.index){
                cars[index-1].shapeColor="red";
                camera .position.x=displayWidth/2;
                camera.position.y=cars[index-1].y
                stroke(10);
                fill ("red");
                ellipse(x,y,60,60)

            }   
        }
        if(keyDown(UP_ARROW)&& player.index!=null){
            player.distance=player.distance+10;
            player.update();
        }
       
    }
    if(player.distance>4110){
        gameState=2
        player.rank=player.rank+1;
        Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
}
    end(){
        // var message=createElement("h1");
        // message.html("Congratulations! " +player.name+ " Your Rank Is "+player.rank);
        // message.position(displayWidth/2-70,displayHeight/4)
    }
    showLeaderboard(){
        var board= createElement("h1")
        board.position(displayWidth/2-50,50);
        board.html(" Leader Board ");
        board.style("color", "blue");

        var ranks=[];

        for(var p in allPlayers){
            ranks.push({name:allPlayers[p].name,rank:allPlayers[p].rank})
        }
        var y=200
        for( var r in ranks){
            var title=createElement("h2");
            title.position(displayWidth/2,y);
            title.style("color","red");
            y=y+100;
            ranks.sort(function(a,b){
                return a.rank-b.rank
            })
            title.html(ranks[r].name+":"+ranks[r].rank)
        }    
    }
}