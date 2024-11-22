import {activePlayer, player1, CPUPlayer, CPUPlayer2, CPUPlayer3, switchPlayer} from "../composables/players"
import {spacesArray} from "../composables/spaces"

function cpuLandingSpaceLogic (movePlayer){
  let propertyPrice = spacesArray[activePlayer.location].price
  
      activePlayer.cash = activePlayer.cash - propertyPrice
       activePlayer.statusMessage = activePlayer.name + " has bought"+ spacesArray[activePlayer.location].name
       console.log(activePlayer.statusMessage)
}


export {cpuLandingSpaceLogic, }