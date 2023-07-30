<template>
    <div >
    <h1 class ="text-3xl absolute z-[999] bg-blue-600 w-full h-full top-0 text-center p-12">Welcome to the Auction. We have the following property for sale. Highest
      bidder takes it. Good luck! 
    </h1>
    <PropertyCards class ="absolute  z-[999] top-[10%] text-4xl scale-y-60 scale-x-60"/> 
    <input v-model="bidAmount" type="number" placeholder="Enter your bid" 
    class =" bg-white absolute z-[999] left-[20%] bottom-[10%] w-[200px] " />
    </div>
    <button id ="confirmbidbtn" class ="absolute z-[999] left-[30%] bottom-[10%] w-[200px] bg-green-500 ml-[5%]" >Place Bid </button>
  </template>
  
  <script>
  
  import  PropertyCards from "./PropertyCards.vue"
  
  export default {
    components: {
    PropertyCards
  },
    name: 'Auction',
    props: ['auctionIsActive'],
  
    setup(props) {
      
      
      let bidAmount = null;
      
      
      return {
  
      bidAmount, 
    };






    },

   

  };
  </script>
  