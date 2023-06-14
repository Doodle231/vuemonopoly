<template>
  <div id="historycontainer" class="absolute w-[40%] h-[40%] left-[10%] bottom-[15vh] bg-yellow-200">
    It is {{activePlayer.name}} 's turn
    {{ Player1StatusMessage }}
  </div>
</template>

<script>
import { watch } from 'vue';
import { activePlayer } from '../composables/players';

export default {
  name: 'PlayerHistory',
  props: ['activePlayer',
         'Player1StatusMessage'

],


  
  setup(props) {
  

    let Player1Message = props.Player1StatusMessage
    watch(activePlayer, (newValue) => {
    
    });

    return {
      Player1Message
    };
  },
};
</script>