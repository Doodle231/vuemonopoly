<template>
  <div class="w-[100vw] h-[100vh] bg-red-300 absolute z-[999] top-0 text-[3rem] text-center">
    <p>Bid totals</p>
    <div class="bidCards flex columns-4 gap-24 w-[80vw] ml-[10%] mt-48">
      <p
        v-for="(bid, index) in displayedBids"
        :key="index"
        class="bg-blue-200 w-[25%] h-[26rem]"
      >
        Player {{ index + 1 }}'s bid: ${{ bid }}
      </p>
    </div>
    <p v-if="winningBid !== null">
      The winning bid is: ${{ winningBid }} by Player {{ winningPlayer.name }}
    </p>
    <button
      id="NEXTSCREENBTN"
      @click="closeAuction"
      class="w-44 h-12 bg-green-400 absolute z-[999] left-40"
    >
      Next Turn
    </button>
  </div>
</template>

<script>
export default {
  name: 'AuctionResult',
  emits: ['auctionfinished'],
  props: {
    bid: { type: Number, required: true },
    player2Bid: { type: Number, required: true },
    player3Bid: { type: Number, required: true },
    player4Bid: { type: Number, required: true },
    winningPlayer: { type: Object, required: true },
    winningBid: { type: Number, required: true },
  },
  data() {
    return {
      displayedBids: [this.bid, this.player2Bid, this.player3Bid, this.player4Bid],
    };
  },
 
  methods: {
    closeAuction() {
      this.$emit('auctionfinished');
      console.log(this.displayedBids);
    },
  },
};
</script>
