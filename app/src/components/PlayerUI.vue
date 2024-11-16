<template>
  <div :id="`player-${index}`" :class="{ 'bg-blue-500': highlightName }" class="player-container w-[100%] h-[20%]  ml-30 mb-10 relative bg-blue-400">
    <h1 class="text-2xl  pl-8 font-bold">{{ playerName }}</h1>
    <h2 class="player-cash ml-8 text-center absolute top-[5%] left-[20%]">Cash: ${{ playerCash }}</h2>
<div id ="smallcardswrapper" class="grid grid-cols-9 columns-xs grid-rows-2">
    <div  ref ="hello" class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-blue-600 visibility: hidden" ></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-blue-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-red-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-red-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-red-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-green-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-green-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-green-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-yellow-400 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-yellow-400 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-yellow-400 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-orange-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-orange-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-orange-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-pink-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-pink-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-pink-600 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-blue-300 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-blue-300 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-blue-300 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-orange-900 visibility: hidden"></div>
    <div class ="smallUIcards bg-slate-200 h-6 w-6 border-t-[8px] border-orange-900 visibility: hidden"></div>

  <h1>{{smallCardVisible}}</h1>
  </div>
 
</div>
</template>

<script>
import { activePlayer } from '../composables/players';
import { onMounted, ref} from 'vue';

export default {
  name: 'PlayerUI',
  props: [
    'playerName',
    'playerCash',
    'numberofProperties',
    'hotelsOwned',
    'housesOwned',
    'activePlayer',
    'highlightName', 
     'index', 
     'smallCardVisible', 
    
  ],

  setup(props) {

    const hello = ref(null)

  

    onMounted(() => {
        //change the visibilty here
        let smallCardVisible = props.smallCardVisible
        //hello.value.classList.remove('hidden')
        console.log()
      })
    const currentPlayer = activePlayer;
    
    console.log(props);
    return {
      currentPlayer,
      hello, 
     
     
    };
  },
};
</script>
