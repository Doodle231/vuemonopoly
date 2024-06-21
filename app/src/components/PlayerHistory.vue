<template>
  <div id="historycontainer" class=" absolute w-[27%] h-[23%] left-[20%] bottom-[20vh] bg-yellow-200 overflow-auto" ref="container">
    <div ref="content" class="p-4">
      <div v-for="(update, index) in updates" :key="index" class="mb-2">{{ update }}</div>
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted, nextTick } from 'vue';
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3 } from '../composables/players';

export default {
  name: 'PlayerHistory',

  setup(props, { refs }) {
    const container = ref(null);
    const content = ref(null);
    const updates = ref([]);

    watch(() => player1.diceRolled, (newLocation, oldLocation) => {
  updates.value.push(` ${player1.name } has rolled a ${player1.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
});

watch(() => player1.statusMessage, (newLocation, oldLocation) => {
  updates.value.push(` ${player1.statusMessage }`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
});

watch(() => CPUPlayer.diceRolled, (newLocation, oldLocation) => {
  updates.value.push(` ${CPUPlayer.name } has rolled a ${CPUPlayer.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
});


watch(() => CPUPlayer2.location, (newLocation, oldLocation) => {
  updates.value.push(` ${CPUPlayer2.name } has rolled a ${CPUPlayer2.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
});


watch(() => CPUPlayer3.location, (newLocation, oldLocation) => {
  updates.value.push(` ${CPUPlayer3.name } has rolled a ${CPUPlayer3.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
});



/*
    watch(player1, (newValue) => {
      updates.value.push(` ${newValue.name} has rolled a ${newValue.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
    });
    
    watch(CPUPlayer, (newValue) => {
      updates.value.push(` ${newValue.name} has rolled a ${newValue.diceRolled}`);
      nextTick(() => {
        container.value.scrollTop = content.value.clientHeight;
      });
    });

   */ 

    return {
      container,
      content,
      updates,
    };
  },
};
</script>
