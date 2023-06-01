<template>
  <div id="historycontainer" class="absolute w-[40%] h-[40%] left-[10%] bottom-[15vh] bg-yellow-200">
    The active player is {{ name }}
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { activePlayer } from '../composables/players';

export default {
  name: 'PlayerHistory',
  props: ['activePlayer'],

  setup() {
    const name = ref(activePlayer.name);

    watch(activePlayer, (newValue) => {
      name.value = newValue.name;
    });

    return {
      name,
    };
  },
};
</script>
