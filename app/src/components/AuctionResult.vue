<template>
  <div class="w-[100vw] h-[100vh] bg-red-300 absolute z-[999] top-0">
    This is the copy of auction result:

    <p>Player 1's bid is: ${{ bid }}</p>
  

    
  </div>
</template>

<script>


export default {
  name: 'AuctionResult',
  props: {
    // Accepting the bid from the parent component
    bid: {
      type: Number,
      required: true
    }
  },
  setup() {
    // Static bids for players 2, 3, and 4
   

    return {
   
     
    };
  }
};
</script>
