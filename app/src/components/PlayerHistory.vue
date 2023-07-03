<template>
  <div id="historycontainer" class="absolute w-[40%] h-[40%] left-[10%] bottom-[15vh] bg-yellow-200">
    It is {{activePlayer.name}} 's turn
    {{ activePlayer.name }} has rolled a {{ activePlayer.diceRolled }}
    
  </div>
</template>

<script>
import { watch } from 'vue';
import { activePlayer } from '../composables/players';

export default {
  name: 'PlayerHistory',
  props: ['activePlayer',
       

],


  
  setup(props) {
  


    watch(activePlayer, (newValue) => {
    
    });

    return {
    
    };
  },
};
</script>