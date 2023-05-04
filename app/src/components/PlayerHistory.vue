<script >
export default { 
  name: 'PlayerHistory',
  props: [
    'playerHistory'
  ],

}


</script>

<template>
    <div id ="historycontainer" class ="absolute w-[80%] h-[40%] left-[10%] bottom-[15vh] bg-yellow-200">{{playerHistory}}</div>

</template>