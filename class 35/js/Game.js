class Game{
    constructor(){
    
    }
    getState(){
        var gameStateREF=database.ref('gameState');
        gameStateREF.on("value",function(data){
            gameState=data.val();
        })
    }
   update(state){
       database.ref('/').set({
           gameState:update
       })
    }
    async start(){
        if(gameState===0){
            player = new Player();
             var playerCountREF = await database.ref('playerCount').once("value")
            if(playerCountREF.exists()){
                playerCount = playerCountREF.val();
                player.getCount();
            }
            form=new Form()
            form.display();
        }
    }
    play(){
         form.hide();
         fill ("blue");
         textSize(45);
         text ("GAME-STARTS",120,100);                
    }  
}
