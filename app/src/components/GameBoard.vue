<template>
  <div
    id="gameboard"
    class="grid grid-cols-11 grid-rows-11 relative w-[100vw] md:w-[60vw] md:ml-10 md:mt-2 h-[90vh] bg-[#D9D9D9]"
  >
    <div
      id="bottom-row"
      class="grid grid-cols-11 col-start-1 row-start-[-1] col-end-12 relative h-[9vh]"
    >
      <div
        v-for="(space, index) in bottomRow"
        :key="space.id"
        :class="getItemClass(index)"
        class="pt-4 pb-4 h-4 relative"
      >

      <img
          v-if="space.id === player1Position"
          src="../assets/boot.png"
          alt="Image"
          class="w-1/2 absolute "
        />
        <img
          v-if="space.id === cpuPlayer1Position"
          src="../assets/car.png"
          alt="Image"
          class="w-1/2 absolute top-10"
        />
        <img
          v-if="space.id === cpuPlayer2Position"
          src="../assets/hat.png"
          alt="Image"
          class="w-1/2 absolute top-24"
        />
        <img
          v-if="space.id === cpuPlayer3Position"
          src="../assets/dog.png"
          alt="Image"
          class="w-1/2 absolute top-14"
        />
        <div
          class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center"
        >
          <h1 class="mt-8">{{ space.name }}</h1>
          <h1 class="mt-8">{{ space.price }}</h1>
        </div>
        
      </div>
    </div>

    <div id="left-column" class="grid grid-rows-12 row-start-3 absolute w-[5.5vw] mt-10">
      <div
        v-for="(space, index) in leftColumn"
        :key="space.id"
        class="border border-black-1 h-[7.5vh]"
      >
        <div :class="getLeftColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src="../assets/boot.png" alt="Image" />
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
      </div>
    </div>

    <div
      id="top-row"
      class="grid grid-cols-11 col-start-1 col-end-12 relative row-span-2 border border-black-1 h-[9vh]"
    >
      <div
        v-for="(space, index) in topRow"
        :key="space.id"
        :class="getTopColumnClass(index)"
        class="pt-4 pb-4 h-4"
      >
        <div
          class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center"
        >
          {{ space.name }}
        </div>
      </div>
    </div>

    <div
      id="right-column"
      class="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11 mt-8"
    >
      <div
        v-for="(space, index) in rightColumn"
        :key="space.id"
        class="border border-black-1 h-[7.5vh]"
      >
        <div :class="getRightColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src="../assets/boot.png" alt="Image" />
        </div>

        <div class="space-name text-xs mt-4">{{ space.name }}</div>
      </div>
    </div>

    <template v-if="isCardActive">
      <MainModal
        :isCardActive="isCardActive"
        :cardIndex="activeCardIndex"
        :cpuPlayer1Position="cpuPlayer1Position"
        @test="CPULand"
      />
    </template>
  </div>

  <div id="logo" class="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly</div>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { spacesArray, bottomRow, leftColumn, rightColumn, topRow } from '../composables/spaces.js'
import MainModal from './MainModal.vue'

import {
  activePlayer,
  player1,
  CPUPlayer,

  CPUPlayer2,
  CPUPlayer3
} from '../composables/players'


export default {
  components: {
    MainModal
  },
  name: 'GameBoard',
  props: [
    'diceRolled',
    'cpuPlayer1DiceRolled',
    'cpuPlayer2DiceRolled',
    'cpuPlayer3DiceRolled',
    'highlightIndex'
  ],

  emits: ['updatedIndex',
         'updateActive'

],
  setup(props, context) {
    

  

    const isCardActive = ref(false)

    const activeCardIndex = ref(null)

    const player1Position = ref(0)
    const cpuPlayer1Position = ref(0)
    const cpuPlayer2Position = ref(0)
    const cpuPlayer3Position = ref(0)


    

    const incrementPosition = () => {
  
      if (player1Position.value < props.diceRolled) {
    player1Position.value++

  }

  if (cpuPlayer1Position.value < CPUPlayer.diceRolled) {

      cpuPlayer1Position.value++
     
  }

  if (cpuPlayer2Position.value < CPUPlayer2.diceRolled) {
      cpuPlayer2Position.value++
     
      
  }

  if (cpuPlayer3Position.value < CPUPlayer3.diceRolled) {
      cpuPlayer3Position.value++
  
  }
}


    let intervalId = null
    const startAutoIncrement = () => {
      intervalId = setInterval(incrementPosition, 200)
    }
    const stopAutoIncrement = () => {
      clearInterval(intervalId)
     
    }

    function CPULand (){
      console.log("cpuland")


     CPUPlayer.diceRolled = 8

     context.emit('updateActive')
    

    }


    
    watch(player1Position, (newValue) => {
      if (newValue >= props.diceRolled) {
        activePlayer.location += props.diceRolled
        activeCardIndex.value += activePlayer.location
        isCardActive.value = true
      
        
        
      }
    })

    
    watch(cpuPlayer1Position, (newValue) => {
      if (newValue >= CPUPlayer.diceRolled) {
     
      CPUPlayer2.diceRolled = 10
      
      context.emit('updateActive')
      }
    })

    

    watch(cpuPlayer2Position, (newValue) => {

  if (newValue >= CPUPlayer2.diceRolled) {
   
   CPUPlayer3.diceRolled = 8
    context.emit('updateActive')
   
  
    
  }
})

/*
    watch(cpuPlayer3Position, (newValue) => {
      console.log("cpu player 3 " + newValue, CPUPlayer3.location)
      if (newValue >= CPUPlayer3.location) {
        context.emit('updateActive')
        stopAutoIncrement()
        
      }
    })
 */ 


 
    onMounted(startAutoIncrement)
    onUnmounted(stopAutoIncrement)

    const getItemClass = (index) => {
      if (index === 9 || index === 7) {
        return 'bg-red-950 '
      } else if (index === 4 || index === 2 || index === 1) {
        return 'bg-blue-200 '
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-fuchsia-500'
      } else {
        return ''
      }
    }

    const getLeftColumnClass = (index) => {
      if (index === 6 || index === 8 || index === 5) {
        return 'bg-pink-600'
      } else if (index === 3 || index === 1 || index === 0) {
        return 'bg-orange-500'
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-pink-900'
      } else {
        return ''
      }
    }

    const getTopColumnClass = (index) => {
      if (index === 1 || index === 3 || index === 4) {
        return 'bg-red-600'
      } else if (index === 6 || index === 7 || index === 9) {
        return 'bg-yellow-300'
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-pink-900'
      } else {
        return ''
      }
    }

    const getRightColumnClass = (index) => {
      if (index === 0 || index === 1 || index === 3) {
        return 'bg-green-600'
      } else if (index === 6 || index === 8) {
        return 'bg-blue-800'
      }
    }

    return {
      getItemClass,
      getLeftColumnClass,
      spacesArray,
      topRow,
      bottomRow,
      leftColumn,
      rightColumn,
      player1Position,
      activeCardIndex,
      isCardActive,
      cpuPlayer1Position,
      cpuPlayer2Position,
      cpuPlayer3Position,
      getTopColumnClass,
      getRightColumnClass, 
      CPULand, 
    }
  }
}
</script>
