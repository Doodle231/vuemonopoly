<script >
import PlayerHistory from './PlayerHistory.vue';



export default { 
  name: 'GameBoard',
  components: {
  PlayerHistory, 

  }, 
  data(){
    return {
      diceRolled:false 
    }
  },
  methods: { 
    rollDice(){
      this.diceRolled = true;   
      
      return console.log(Math.floor(Math.random() * 12) +  1)
    }
    
  },
 
 
}
</script>

<template>

  <div id = "gameboard" class ="grid grid-cols-11 grid-rows-11  mt-4 relative w-[100vw] md:w-[60vw] md:ml-10
  md:mt-10 h-[90vh] bg-[#D9D9D9]  ">

  <div id = "logo" class ="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly </div>

  
  
  
  <div v-if="diceRolled" class =" w-[120px]  ">
<img src ="../assets/rollanimation.gif">
<PlayerHistory playerHistory = "hello there "  />
  </div>
    
  <button v-on:click ="rollDice">Roll</button>
  <div id ="top-row" class ="grid grid-cols-11 col-start-1  col-end-12 relative  row-span-2  ">
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  border-l-2  " >
  <div class ="space-name text-xs mt-4">Free Parking</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-red-700 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Kentucky Avenue </div>
  <div class ="propertyprice">220</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="space-name text-xs mt-4">Chance</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-red-700 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Indiana Avenue</div>
  <div class ="propertyprice">220</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-red-700 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Illinois Avenue</div>
  <div class ="propertyprice">240</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  
  <div class ="space-name text-xs mt-4">B & B Railroad</div>
  <div class ="propertyprice">200</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-yellow-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Atlantic Avenue </div>
  <div class ="propertyprice">260</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-yellow-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Ventor Avenue</div>
  <div class ="propertyprice">260</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
 
  <div class ="space-name text-xs mt-4">Water Works</div>
  <div class ="propertyprice">150</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-yellow-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Marvin Gardens </div>
  <div class ="propertyprice">280</div>
  </div>
  
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="space-name text-xs mt-4">Jail</div>
  </div>

</div> 

<div id ="left-column" class ="grid grid-rows-12 row-start-3 absolute w-[5.5vw]  ">
  <div class ="space bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="card-top bg-yellow-500 border-stone-950 border-y  border-l-2 "></div>
  <div class ="space-name text-xs mt-4">New York Avenue </div>
  <div class ="propertyprice">200</div>
  </div>

  
  <div class ="space  bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs   mt-[25%]">Tenessee Avenue </div>
  <div class ="propertyprice">180</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="space-name text-xs mt-4">Community Chest</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">St. James Place</div>
  <div class ="propertyprice">180</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Pennsylvania Railroad</div>
  <div class ="propertyprice">200</div>
  </div>
  <div class ="space  card-top border-x-[#DF2C87] border-r-[2vw] h-[8vh] border-l-2 " >

  <div class ="space-name text-xs mt-4">Virginia Avenue</div>
  <div class ="propertyprice">160</div>
  </div>
  <div class ="space card-top border-x-[#DF2C87] border-r-[2vw] h-[8vh] border-l-2 " >

  <div class ="space-name text-xs mt-4">States Avenue </div>
  <div class ="propertyprice">140</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="space-name text-xs mt-4">Electric Company</div>
  <div class ="propertyprice">150</div>
  </div>
  <div class ="space border-x-[#DF2C87] border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="card-top bg-[#DF2C87] border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">St. Charles Place</div>
  <div class ="propertyprice">140</div>
  </div>


</div>


<div id ="bottom-row"  class ="grid grid-cols-11  col-start-1  row-start-[-1] col-end-12 relative h-[9vh]   ">
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  border-l-2 h-[100%] relative" >
  
  <div class ="space-name text-xs mt-4">Jail</div>
  <img src ="../assets/visiting.jpg" class ="absolute right-[0] top-0 w-[70%] h-[70%]">
  <h1 class = "absolute bottom-5 left-4">Just Visiting</h1>
  </div>
  
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Conneticut Avenue</div>
  <div class ="propertyprice">120</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Vermont</div>
  <div class ="propertyprice">100</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  
  <div class ="space-name text-xs mt-4">Chance</div>
  <h1 class = "text-9xl text-red-600 mb-3">?</h1>
  
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Oriental Avenue</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >

  <div class ="space-name text-xs mt-4">Reading Railroad</div>
  <img src ="../assets/railroad.gif" class ="boardicon">
  <div class ="propertyprice">200</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  text-center" >
  <div class ="space-name text-xs mt-4">Income Tax</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 text-center" >
  <div class ="card-top bg-yellow-900 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Baltic Avenue</div>
  <div class ="propertyprice">60</div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 text-center " >
  <div class ="space-name text-xs mt-4 absolute z-999">Community Chest</div>
  <img src ="../assets/chest.jpg" class ="h-[100%] relative w-[100%]"></div>
 
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 text-center " >
  <div class ="card-top bg-yellow-900 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Mediterrenean</div>
  <div class ="propertyprice">60</div>
  <div id = "space1"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-y h-1/4 border-stone-950"></div>
  <div class ="space-name text-xs mt-4">Home</div>
  </div>


</div>





  <div id ="right-column" class ="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11  ">
  <div class ="space bg-[#9DD2B4] border-x-green-700  border-l-[2vw] h-[8vh] " >
  <div class ="space-name text-xs mt-4">Pacific Avenue</div>
  <div class ="propertyprice">300</div>
  </div>

  
  <div class ="space bg-[#9DD2B4] border-x-green-700  border-l-[2vw] h-[8vh] " >
  <div class ="space-name text-xs mt-4">North Carolina Avenue</div>
  <div class ="propertyprice">300</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh]  border-l-2" >

  <div class ="space-name text-xs mt-4">Community Chest</div>

  </div>

  <div class ="space bg-[#9DD2B4]  border-x-green-700  border-l-[2vw] h-[8vh]  " >
  <div class ="space-name text-xs mt-4">Pennsylvania Avenue</div>
  <div class ="propertyprice">320</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="space-name text-xs mt-4">Short Line</div>
  <div class ="propertyprice">200</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="space-name text-xs mt-4">Chance</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2   border-x-blue-500  border-l-[2vw] h-[8vh] " >
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice">350</div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="space-name text-xs mt-4">Luxury Tax</div>
  <div class ="propertyprice"></div>
  </div>
  
  <div class ="space bg-[#9DD2B4]  border-x-blue-500  border-l-[2vw] h-[8vh] ">
  <div class ="space-name text-xs mt-4">BoardWalk</div>
  <div class ="propertyprice">400</div>
  </div>


</div>
</div>






</template>


