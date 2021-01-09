class Game {
    constructor (){

    }
  getState(){
      database.ref ('gameState').on("value",(data)=>{
          gameState = data.val();
      })

  }
  updateState (state){
    database.ref ('gameState').update({
        gameState : state,
    })
  }
}