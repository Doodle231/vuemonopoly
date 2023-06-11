<template>
 
  <div id="gameboard"  class="grid grid-cols-11 grid-rows-11  relative w-[100vw] md:w-[60vw] md:ml-10 md:mt-2 h-[90vh] bg-[#D9D9D9] ">
    <div id="bottom-row" class="grid grid-cols-11 col-start-1 row-start-[-1] col-end-12 relative h-[9vh]  ">
      
      <div v-for="(space, index) in bottomRow" :key="space.id" :class="getItemClass(index)" class="pt-4 pb-4 h-4 " >
  
        
        <div class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center">
          <h1 class = "mt-8">{{ space.name }}</h1>
         <h1 class = "mt-8"> {{ space.price }}</h1>
        </div>
        
        
        
        <img v-if="space.id === player1Position" src ="../assets/boot.png" alt="Image" class ="w-1/2">
        <img v-if="space.id === cpuPlayer1Position" src ="../assets/car.png" alt="Image" class ="w-1/2">
        <img v-if="space.id === cpuPlayer2Position" src ="../assets/hat.png" alt="Image" class ="w-1/2">
        <img v-if="space.id === cpuPlayer3Position" src ="../assets/dog.png" alt="Image" class ="w-1/2">
  
      </div>
     
    </div>

    <div id="left-column" class="grid grid-rows-12 row-start-3 absolute w-[5.5vw] ">
      <div v-for="(space, index) in leftColumn" :key="space.id" class=" border border-black-1 h-[7.5vh]">
        <div :class="getLeftColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src ="../assets/boot.png" alt="Image">
          
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
       
      </div>
    </div>

    <div id="top-row" class="grid grid-cols-11 col-start-2 col-end-12 relative row-span-2  border border-black-1 h-[9vh]">
      <div v-for="(space, index) in topRow" :key="space.id" :class="getTopColumnClass(index)" class="pt-4 pb-4 h-4">
        <div class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center">{{ space.name }}</div>
     
      </div>
    </div>

    <div id="right-column" class="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11 ">
      <div v-for="(space, index) in rightColumn" :key="space.id"  class=" border border-black-1 h-[7.5vh]">
        <div :class="getRightColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src ="../assets/boot.png" alt="Image">
          </div>
        
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
     
      </div>
    </div>
   

    <template v-if="isCardActive"> <MainModal :isCardActive="isCardActive" 
      :cardIndex="activeCardIndex" 
      :cpuPlayer1Position = "cpuPlayer1Position"
    
      @test ="myAction" />
       </template>

 
  </div>
 

  <div id="logo" class="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly</div>

</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { spacesArray, bottomRow, leftColumn, rightColumn, topRow } from '../composables/spaces.js';
import MainModal from "./MainModal.vue";


import { activePlayer, player1 , CPUPlayer, switchPlayer, CPUPlayer2, CPUPlayer3} from '../composables/players';
import {CPULandingCheck} from "../composables/cpuplayerslogic"

export default {
  components: {
    MainModal,
    
},
  name: 'GameBoard',
  props: [
    'diceRolled',
     'cpuPlayer1DiceRolled',
     'cpuPlayer2DiceRolled',
     'cpuPlayer3DiceRolled',
     'informationModalIsActive',
     'highlightIndex'
    
  ],
  
  emits: ['updatedIndex'],
  setup(props,context) {

  
     console.log(player1.name)
    function myAction (){
     /*
      startAutoIncrement()
      switchPlayer()
      activePlayer.diceRolled = Math.floor(Math.random() * 12)
      activePlayer.location += activePlayer.diceRolled
     console.log(activePlayer)
     */ 
    
     CPULand()
     
    }
  
  
   
    const isCardActive = ref(false)
    
    const activeCardIndex = ref(null)
    
    
    const player1Position = ref(0)
    const cpuPlayer1Position =ref(0)
    const cpuPlayer2Position = ref(0)
    const cpuPlayer3Position = ref(0)
   
    function CPULand (){
     
       console.log(context)
      switchPlayer()
      spacesArray[activePlayer.location].owner = activePlayer
      activePlayer.cash -= spacesArray[activePlayer.location].price
      activePlayer.numberofProperties += 1 
      activePlayer.propertyowned.push(spacesArray[activePlayer.location])
     
   
      startAutoIncrement()

      activePlayer.diceRolled = Math.floor(Math.random() * 12)
      activePlayer.location += activePlayer.diceRolled

    



   

      switchPlayer()

      
     //CPULandingCheck(startAutoIncrement)

    }

    function initCPUTurn (){
        
      
      CPUPlayer2.diceRolled = Math.floor(Math.random() * 12)
      CPUPlayer2.location += CPUPlayer2.diceRolled
     


     if  (activePlayer === CPUPlayer2)
     {setTimeout(() => {
    
      CPUPlayer3.diceRolled = Math.floor(Math.random() * 12)
      CPUPlayer3.location += CPUPlayer3.diceRolled
  }, 3800);
}

  
    startAutoIncrement()
   

    }
   
    const incrementPosition = () => {
   
    

      if (player1Position.value < props.diceRolled) {
player1Position.value++;

}
     
      if (cpuPlayer1Position.value < CPUPlayer.diceRolled) {
  setTimeout(() => {
    cpuPlayer1Position.value++;
  }, 800);
}
      
      if (cpuPlayer2Position.value < CPUPlayer2.diceRolled) {
      
        setTimeout(() => {
    cpuPlayer2Position.value++;
    context.emit('updatedIndex')
  }, 1800);
  
}

      if (cpuPlayer3Position.value < CPUPlayer3.diceRolled) {
     
        setTimeout(() => {
          context.emit('updatedIndex')
    cpuPlayer3Position.value++;
  }, 1800);
}

    };

    let intervalId = null;
    const startAutoIncrement = () => {
      intervalId = setInterval(incrementPosition, 200);
    };
    const stopAutoIncrement = () => {
      clearInterval(intervalId);
    };


   
    watch(player1Position, (newValue) => {
      if (newValue >= props.diceRolled) {
        activePlayer.location += props.diceRolled
       activeCardIndex.value += activePlayer.location
     
       isCardActive.value = true; 
        stopAutoIncrement();
      
      }
    });


    watch(cpuPlayer1Position, (newValue) => {
      if (newValue >= CPUPlayer.diceRolled) {
        activePlayer.location += CPUPlayer.diceRolled
       activeCardIndex.value += activePlayer.location
      
        initCPUTurn()
        stopAutoIncrement();
       
      }
    });

    watch(cpuPlayer2Position, (newValue) => {
     
      if (newValue >= CPUPlayer2.location) {
        activePlayer.location += CPUPlayer2.diceRolled
       activeCardIndex.value += activePlayer.location
       initCPUTurn()
        stopAutoIncrement();
       
      }
    });

    watch(cpuPlayer3Position, (newValue) => {

      if (newValue >= CPUPlayer3.location) {
        activePlayer.location += CPUPlayer3.diceRolled
       activeCardIndex.value += activePlayer.location
        initCPUTurn()
        stopAutoIncrement();
       
      }
    });




    onMounted(startAutoIncrement);
    onUnmounted(stopAutoIncrement);

    const getItemClass = (index) => {
      if (index === 9 || index === 7) {
        return 'bg-red-950 ';
      } else if (index === 4 || index === 2 || index === 1) {
        return 'bg-blue-200 ';
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-fuchsia-500';
      } else {
        return '';
      }
    };

    const getLeftColumnClass = (index) => {
      if (index === 6 || index === 8 || index === 5) {
        return 'bg-pink-600';
      } else if (index === 3 || index === 1 || index === 0) {
        return 'bg-orange-500';
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-pink-900';
      } else {
        return '';
      }
    };

    const getTopColumnClass = (index) => {
      if (index === 1 || index === 3 || index === 4) {
        return 'bg-red-600';
      } else if (index === 6 || index === 7 || index === 9) {
        return 'bg-yellow-300';
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-pink-900';
      } else {
        return '';
      }
    };

    const getRightColumnClass = (index) => {
      if (index === 0 || index === 1 || index === 3) {
        return 'bg-green-600';
      } else if (index === 6 || index === 8 ) {
        return 'bg-blue-800';
      }
    };

    const getImageSrc = () => {
      return `../assets/boot.png`
      
    };

      



    return {
      getItemClass,
      getLeftColumnClass,
      spacesArray,
      topRow,
      bottomRow,
      leftColumn,
      rightColumn,
      player1Position,
      getImageSrc,
      activeCardIndex, 
      isCardActive, 
      cpuPlayer1Position, 
      cpuPlayer2Position, 
      cpuPlayer3Position,
      myAction, 
      CPULand, 
     CPULandingCheck, 
     initCPUTurn, 
     getTopColumnClass, 
     getRightColumnClass, 
 
      
    };
  },
};
</script>

