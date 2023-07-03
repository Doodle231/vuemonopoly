<template>
  <div id="gameboard" class="grid grid-cols-11 grid-rows-11 relative w-[100vw] md:w-[60vw] md:ml-10 md:mt-2 h-[90vh] bg-[#D9D9D9]">
    <div id="bottom-row" class="grid grid-cols-11 col-start-1 row-start-[-1] col-end-12 relative h-[9vh]">
      <div v-for="(space, index) in bottomRow" :key="space.id" :class="getItemClass(index)" class="pt-4 pb-4 h-4 relative">
        <img v-if="space.id === player1Position" src="../assets/boot.png" alt="Image" class="w-1/2 absolute" />
        <img v-if="space.id === cpuPlayer1Position" src="../assets/car.png" alt="Image" class="w-1/2 absolute " />
        <img v-if="space.id === cpuPlayer2Position" src="../assets/hat.png" alt="Image" class="w-1/2 absolute " />
        <img v-if="space.id === cpuPlayer3Position" src="../assets/dog.png" alt="Image" class="w-1/2 absolute " />
        <div class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center">
          <h1 class="mt-8">{{ space.name }}</h1>
          <h1 class="mt-8">{{ space.price }}</h1>
        </div>
      </div>
    </div>

    <div id="left-column" class="grid grid-rows-12 row-start-3 absolute w-[5.5vw] mt-10">
      <div v-for="(space, index) in leftColumn" :key="space.id" class="border border-black-1 h-[7.5vh]">
        <div :class="getLeftColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src="../assets/boot.png" alt="Image" />
          <img v-if="space.id === cpuPlayer1Position" src="../assets/car.png" alt="Image" class="w-1/2 absolute " />
          <img v-if="space.id === cpuPlayer2Position" src="../assets/hat.png" alt="Image" class="w-1/2 absolute " />
          <img v-if="space.id === cpuPlayer3Position" src="../assets/dog.png" alt="Image" class="w-1/2 absolute " />
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
      </div>
    </div>

    <div id="top-row" class="grid grid-cols-11 col-start-1 col-end-12 relative row-span-2 border border-black-1 h-[9vh]">
      <div v-for="(space, index) in topRow" :key="space.id" :class="getTopColumnClass(index)" class="pt-4 pb-4 h-4">
        <img v-if="space.id === player1Location" src="../assets/boot.png" alt="Image" />
        <img v-if="space.id === cpuPlayer1Position" src="../assets/car.png" alt="Image" class="w-1/2 absolute top-10" />
        <img v-if="space.id === cpuPlayer2Position" src="../assets/hat.png" alt="Image" class="w-1/2 absolute top-24" />
        <img v-if="space.id === cpuPlayer3Position" src="../assets/dog.png" alt="Image" class="w-1/2 absolute top-14" />
        <div class="space-name text-xs mt-4 h-24 bg-[#D9D9D9] border border-black-1 border-t-0 text-center">
          {{ space.name }}
        </div>
      </div>
    </div>

    <div id="right-column" class="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11 mt-8">
      <div v-for="(space, index) in rightColumn" :key="space.id" class="border border-black-1 h-[7.5vh]">
        <div :class="getRightColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src="../assets/boot.png" alt="Image" />
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
      </div>
    </div>

  
  
  </div>

  <div id="logo" class="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly</div>
</template>

<script>
import { ref, watch, computed} from 'vue'
import { spacesArray, bottomRow, leftColumn, rightColumn, topRow } from '../composables/spaces.js'
import MainModal from './MainModal.vue'

import { activePlayer, player1, CPUPlayer, CPUPlayer2, CPUPlayer3 } from '../composables/players'

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

  emits: ['updatedIndex', 'updateActive', 'openmodal'],
  setup(props, context) {
  

    const activeCardIndex = ref(null)

    const player1Position = ref(player1.location)
    const cpuPlayer1Position = ref(CPUPlayer.location)
    const cpuPlayer2Position = ref(CPUPlayer2.location)
    const cpuPlayer3Position = ref(CPUPlayer3.location)

    

    const player1Location = computed(() => player1.location)
    const CPUplayer1Location = computed(() => CPUPlayer.location)
    const CPUPlayer2Location = computed(() => CPUPlayer2.location)
    const CPUplayer3Location = computed(() => CPUPlayer3.location)
    

    watch(player1Location, (newValue, oldValue) => {

  const increment = newValue - oldValue
  const step = Math.sign(increment) * 1 // Increment by 1 unit
  let current = oldValue

  const interval = setInterval(() => {
    current += step
    player1Position.value = current
  
    if (current === newValue) {
      clearInterval(interval)
    
     context.emit('updateActive')
     context.emit('openmodal')
    
    }
  }, 200)
})



  
   
    watch(CPUplayer1Location, (newValue, oldValue) => {
      const increment = newValue - oldValue
  const step = Math.sign(increment) * 1 // Increment by 1 unit
  let current = oldValue

  const interval = setInterval(() => {
    current += step
    cpuPlayer1Position.value = current

    if (current === newValue) {
      clearInterval(interval)
      context.emit("updateActive")
      CPUPlayer2.location  +=8
     
    }
  }, 200)
})


watch(CPUPlayer2Location, (newValue, oldValue) => {
      const increment = newValue - oldValue
  const step = Math.sign(increment) * 1 // Increment by 1 unit
  let current = oldValue

  const interval = setInterval(() => {
    current += step
    cpuPlayer2Position.value = current

    if (current === newValue) {
      clearInterval(interval)
      context.emit("updateActive")
      CPUPlayer3.location = 9
    
    }
  }, 200)
})

watch(CPUplayer3Location, (newValue, oldValue) => {
      const increment = newValue - oldValue
  const step = Math.sign(increment) * 1 // Increment by 1 unit
  let current = oldValue

  const interval = setInterval(() => {
    current += step
    cpuPlayer3Position.value = current

    if (current === newValue) {
      clearInterval(interval)
      context.emit("updateActive")
    
    }
  }, 200)
})




    

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
      cpuPlayer1Position,
      cpuPlayer2Position,
      cpuPlayer3Position,
      getTopColumnClass,
      getRightColumnClass,
      player1Location, 
     
    
    }
  }
}
</script>
