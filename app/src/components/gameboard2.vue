<script >
import PlayerHistory from './PlayerHistory.vue';



export default { 
  name: 'GameBoard',
  components: {
  PlayerHistory, 

  }, 

  setup(){
    const SpaceObjects = (price, name, rent , colorsetrent, house1rent, house2rent, 
    house3rent, house4rent, hotelrent, eachhousecost) => {
      
      return { 
        price: price, 
        houses: 0,
        hotels: 0, 
        owner: "The bank",
        name:name, 
        rent: rent,
        colorsetrent:colorsetrent, 
        house1rent:house1rent, 
        house2rent:house2rent, 
        house3rent:house3rent, 
        house4rent:house4rent, 
        hotelrent:hotelrent, 
        eachhousecost:eachhousecost, 
       

      }

    }
    
     const go = SpaceObjects(200,"go", 0, 0, 0, 0, 0, 0, 0, 0)
     const mediterennan = SpaceObjects(50, "mediternnean", 2, 4, 10, 30, 90, 160, 250,50)
     const communitychest = SpaceObjects(0,"Community Chest", 0,0,0,0,0,0,0)
     const balticavenue = SpaceObjects(50, "Baltic Avenue" , 4, 8, 20, 60, 180, 320, 450,50)
     const incometax = SpaceObjects(-200,"Income Tax",0,0,0,0,0,0,0)
     const readingRailRoad = SpaceObjects(200, "Reading Railroad", 25, 200, 25,50,100,200, 0)
     const orientalAvenue = SpaceObjects(100, "Oriental Avenue", 6, 12, 30,90, 270,400,550,50 )
     const chance = SpaceObjects(0, "Chance",0,0,0,0,0,0,0)
     const vermont = SpaceObjects(100, "Vermont Avenue", 6, 12, 30, 90, 270, 400, 550,50)
     const connecticut = SpaceObjects(120, "Conneticut Avenue",8, 16,40,100,300,450,600,50)
     const justVisiting = SpaceObjects(0, "Just Visiting",0,0,0,0,0,0,0)
     const stcharlesPlace = SpaceObjects(140, "St. Charles Place" , 10, 20, 50,150, 450, 625, 750,100 )
     const electricCompany = SpaceObjects(150, "Electric Company")
     const statesavenue = SpaceObjects(140, "States Avenue", 10, 20, 50, 150, 450, 625, 750,100)
     const virginia = SpaceObjects(160, "Virgina Avenue", 12, 24, 60, 180, 500, 700, 900,100)
     const pennRR = SpaceObjects(200, "Penn Railroad", 25, 200, 25,50,100,200, 0)
     const stJamesPlace = SpaceObjects(180, "St. James Place", 14, 28,70,200, 550,750,950,100)
     const tenessee = SpaceObjects(180, "Tenessee Avenue", 14, 28, 70, 200,550,750, 950,100)
     const newYork = SpaceObjects(200, "New York Avenue", 16, 32, 80, 220, 600, 800, 1000,100)
     const freeParking = SpaceObjects(0, "Free Parking",0,0,0,0,0,0,0,)
     const kentucky = SpaceObjects(220, "Kentucky Avenue", 18, 36, 90,250, 700, 875, 1050,150 )
     const indiana = SpaceObjects(220, "Indiana Avenue", 18, 36, 90,250, 700, 875, 1050,150 )
     const illinois = SpaceObjects (220, "Illinois Avenue",30, 20, 400, 100, 300, 750, 925, 1100,150)
     const band0 = SpaceObjects(200, "B & O Railroad",25, 200, 25,50,100,200, 0)
     const atlantic = SpaceObjects(200,"Atlantic Avenue" ,22, 44, 110,330, 800, 975, 1150,150 )
     const ventur = SpaceObjects(200, "Ventur Avenue" ,22, 44, 110,330, 800, 975, 1150,150)
     const waterworks = SpaceObjects(120, "Water Works")
     const marvinGardens = SpaceObjects(240, " Marvin Gardens" ,24, 48, 120, 360, 850, 1025, 1200,150)
     const jail = SpaceObjects(0, "Jail",0,0,0,0,0,0,0)
     const pacific = SpaceObjects(300, "Pacific Avenue " , 26, 52, 130, 390, 900, 1100, 1275,200)
     const northCarolina = SpaceObjects(300, "North Carolina", 26, 52, 130, 390, 900, 1100, 1275,200)
     const pennsylvania = SpaceObjects(320, "Pennsylvania", 28, 56, 150, 450, 1000, 1200, 1400,200)
     const shortLine = SpaceObjects(200, " Short Line RailRoad",25, 200, 25,50,100,200, 0)
     const parkPlace = SpaceObjects(350, "Park Place", 35, 70, 175, 500, 1100, 1300, 1500,200)
     const luxuryTax = SpaceObjects(-100,"Luxury Tax",0,0,0,0,0,0,0 )
     const boardWalk = SpaceObjects(400, "Board Walk", 50, 100, 200, 600, 1400, 1700, 2000,200)



   let spacesArray = [go, mediterennan, communitychest, balticavenue, incometax, readingRailRoad, 
      orientalAvenue, chance, vermont, connecticut, justVisiting, stcharlesPlace, electricCompany, statesavenue, virginia, 
      pennRR, stJamesPlace, communitychest, tenessee, newYork, freeParking, kentucky, chance, indiana, illinois, 
      band0, atlantic, ventur, waterworks, marvinGardens  ,jail, pacific, northCarolina,communitychest,  pennsylvania, shortLine, chance, parkPlace, 
      luxuryTax, boardWalk]
  
     let username ='john'
      return {spacesArray, username, freeParking}

    }
 

 
}
</script>

<template>

  <div v-for="spaces in spacesArray" id = "gameboard" class ="grid grid-cols-11 grid-rows-11  mt-4 relative w-[100vw] md:w-[60vw] md:ml-10
  md:mt-10 h-[90vh] bg-[#D9D9D9]  ">

  <div id = "logo" class ="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly </div>

  
  
  <PlayerHistory :playerHistory = "spacesArray[0].price"/>
  <div v-if="diceRolled" class =" w-[120px]  ">
<img src ="../assets/rollanimation.gif">

  </div>
    
  <button v-on:click ="rollDice">Roll</button>
  <div id ="top-row" class ="grid grid-cols-11 col-start-1  col-end-12 relative  row-span-2  ">
  <div class ="space bg-[#9DD2B4] border-r-2  border-stone-950  border-l-2  " >
  <div class ="space-name text-xs mt-4" >Free Parking</div>
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


<h1 v-for="spaces in spacesArray">

{{ spaces.price }}
</h1>
</template>


