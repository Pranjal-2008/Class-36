class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distance=0;
        this.rank = null;
    }

    getCount(){
        database.ref("playerCount").on ("value",(data)=>
         {
             playerCount = data.val();
         })
    }

    updateCount(count){
        database.ref ("playerCount").update({
            playerCount : count,
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance,
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
           allPlayers = data.val(); 
        })
    }
    
}