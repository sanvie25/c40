class Game{
    constructor(){}
    getState(){
     var gameStateref = database.ref('gameState');
     gameStateref.on("value",function(data){
         gameState = data.val();
     })        
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    async start(){
      if(gameState===0){
          player = new Player();
          var playercountref = await database.ref('playerCount').once("value");
          if(playercountref.exists()){
              playerCount = playercountref.val();
              
          
          player.getCount();
          }
          form = new Form();
          form.display();      
    }
    car1 = createSprite(100,200);
    car1.addImage(car1img);
    car2 = createSprite(300,200);
    car2.addImage(car2img);
    car3 = createSprite(500,200);
    car3.addImage(car3img);
    car4 = createSprite(700,200);
    car4.addImage(car4img);
    cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        //text("game start",120,100);
        Player.getplayerinfo();
        player.getCarsAtEnd();
        if (allplayers!==undefined){
       //     var displayposition = 130;
       background("green");
       image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
       var index = 0,x = 200,y;
            for(var plr in allplayers){
                index++;
                x+=200; 
                y= displayHeight- allplayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
             if(index === player.index){
            stroke(10);
            fill("blue");
            ellipse(x,y,60,60);

         //  cars[index-1].shapeColor = "red"
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;

             }
           // displayposition+=30;
          //  text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition);
        }
        
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
    
        }
        if(player.distance>3800){
        gameState = 2;
        player.rank+=1;
        Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
    }
      end(){
          console.log("gameended");
         // game.update(2);
         console.log(player.rank);

      }
}  

   
       
