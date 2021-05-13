class Player{
    constructor(){

    }
    getCount(){
    var playerCountREF = database.ref('playerCount');
    playerCountREF.on("value",(data)=>{
        playerCount = data.val();
    });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
}