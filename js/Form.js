class Form{
  constructor(){
  this.input  =createInput("hello type your name");
  this.button = createButton('play');
  this.greeting = createElement('h3');
  this.reset = createButton('reset');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
     var title = createElement ('h2');
     title.html("car racing game");
     title.position(displayWidth/2-50,0);
     this.input.position(130,160);
     this.button.position (200,200);
     this.reset.position(displayWidth-100,20);
     
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount ++;
         player.index = playerCount
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("hello"+player.name);
         this.greeting.position(130,160);
         

     })
this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);

})
  }
}