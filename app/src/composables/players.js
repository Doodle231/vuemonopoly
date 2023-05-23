import { reactive } from "vue";


const Players = (name, cash, ) => {
   
    return {
      name:name, 
      cash:cash, 
      railroads:0,
      utilities:0, 
      location: [], 
      propertyowned: [],
      updatedlocation:0,
      icon:null, 
      dice:0,
      turnsTaken:0, 
      hotelsOwned:0, 
      housesOwned:0, 
      
      cardCounts:{
      brownCards:0, 
      lightBlueCards:0, 
      pinkCards:0, 
      orangeCards:0, 
      redCards:0, 
      yellowCards:0, 
      greenCards:0, 
      blueCards:0, 
      },
 
      cardSets: {
       brownSet:false, 
       lightBlueSet:false, 
       pinkSet:false, 
       orangeSet:false, 
       redSet:false, 
       yellowSet:false, 
       greenSet:false, 
       darkBlueSet:false, 
      },
 
 
 
        }
 
    
      }
 
      
       const player1 = reactive(Players ("Dan", 1500, 0, 0, ))
      const CPUPlayer = reactive(Players ("John ", 1500, 0, 0, ))
      const CPUPlayer2 =  reactive(Players ("Frank", 1500, 0, 0, ))
      const CPUPlayer3 = reactive(Players ("Lynn ", 1500, 0, 0, ))

      let activePlayer = player1

     function switchPlayer (){

     
      if (activePlayer === player1 ){
        activePlayer = CPUPlayer
     
         return 
       
       }
      
       if (activePlayer === CPUPlayer) { 
        
        activePlayer = CPUPlayer2
       
        return  
       
       } 
      
       if (activePlayer === CPUPlayer2 ){
        activePlayer = CPUPlayer3
        
        return  

       }

     
    } 
    
     
      export  { player1, CPUPlayer, CPUPlayer2, CPUPlayer3, switchPlayer,activePlayer}