<script >
export default { 
  name: 'GameBoard'
}
</script>

<template>
  
  <div id = "gameboard" class ="grid grid-cols-11 grid-rows-11  mt-4 relative w-[100vw] md:w-[60vw] md:ml-10
  md:mt-20 h-[90vh] bg-[#9DD2B4]  ">

  <div id = "logo" class ="absolute z-99 text-[10vw] top-[25%] left-[10%] text-rose-800">Monopoly </div>
  
  
    <div id ="top-row" class ="grid grid-cols-11 col-start-1  col-end-12 relative  row-span-2  ">
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  border-l-2  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4 border-l-2 "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>

  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y h-1/4"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-y h-1/4 border-stone-950"></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>

</div> 

<div id ="left-column" class ="grid grid-rows-12 row-start-3 absolute w-[5.5vw]  ">
  <div class ="space bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="card-top bg-yellow-500 border-stone-950 border-y  border-l-2 "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>

  
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh]  border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh]  border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
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
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 " >
  <div class ="card-top bg-blue-300 border-y h-1/4 border-stone-950"></div>
  <div class ="space-name text-xs mt-4">Home</div>
  </div>


</div>




i








  <div id ="right-column" class ="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11  ">
  <div class ="space bg-[#9DD2B4] border-x-orange-500  border-r-[2vw] h-[8vh] border-l-2" >
  <div class ="card-top bg-yellow-500 border-stone-950 border-y  border-l-2 "></div>
  <div class ="space-name text-xs mt-4">test Place</div>
  </div>

  
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh]  border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh]  border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2 " >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>

  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950 h-[8vh] border-l-2" >
  <div class ="card-top bg-blue-300 border-stone-950 border-y "></div>
  <div class ="space-name text-xs mt-4">Park Place</div>
  <div class ="propertyprice"></div>
  </div>


</div>

</div>







</template>


