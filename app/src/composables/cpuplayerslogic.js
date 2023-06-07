import {activePlayer, player1, CPUPlayer, CPUPlayer2, CPUPlayer3, switchPlayer} from "../composables/players"
import {spacesArray} from "../composables/spaces"

function CPULandingCheck (movePlayer){
  
  switchPlayer()
      activePlayer.diceRolled = Math.floor(Math.random() * 12)
      activePlayer.location += activePlayer.diceRolled
      spacesArray[activePlayer.location].owner = activePlayer
      activePlayer.cash -= spacesArray[activePlayer.location].price
      activePlayer.numberofProperties += 1 
      activePlayer.propertyowned.push(spacesArray[activePlayer.location])
     
      if (activePlayer === CPUPlayer){
      console.log("cpu player is active")
    }
      movePlayer
       
     
  
}


export {CPULandingCheck, }