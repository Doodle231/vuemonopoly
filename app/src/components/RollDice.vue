<script >

import GameBoard from './GameBoard.vue';

export default { 
  name: 'RollButton',
  
  
  
  methods: {
    rollDice: function () {
      
      return console.log(Math.floor(Math.random() * 12) +  1)
    }
  }
 
}
</script>

<template>

    <button v-on:click = rollDice    
    id ="rollbutton" class ="w-[100px] h-[100px] bg-green-500 text-white absolute z-[2] 
    bottom-[10%] mx-[10%]">Roll </button>
</template>