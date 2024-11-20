<template>
  <div class="w-[100vw] h-[100vh] bg-red-300 absolute z-[999] top-0 text-[3rem] text-center">
    <p>Bid totals</p>
    <div class="bidCards flex columns-4 gap-24 w-[80vw] ml-[10%] mt-48">
      <p
        v-for="(bid, index) in displayedBids"
        :key="index"
        class="bg-blue-200 w-[25%] h-[26rem]"
      >
        Player {{ index + 1 }}'s bid ${{ bid }}
      </p>
    </div>
    <p v-if="winningBid !== null">
      The winning bid is: ${{ winningBid }} by Player {{ winningPlayer }}
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
    bid: {
      type: Number,
      required: true,
    },
    player2Bid: {
      type: Number,
      required: true,
    },
    player3Bid: {
      type: Number,
      required: true,
    },
    player4Bid: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      displayedBids: [],
      winningBid: null,
      winningPlayer: null,
    };
  },
  mounted() {
    this.showBidWithDelay();
  },
  methods: {
    closeAuction() {
      this.$emit('auctionfinished');
      console.log('Auction finished and moving to the next turn');
    },
    showBidWithDelay() {
      setTimeout(() => {
        this.displayedBids.push(this.bid);
        setTimeout(() => {
          this.displayedBids.push(this.player2Bid);
          setTimeout(() => {
            this.displayedBids.push(this.player3Bid);
            setTimeout(() => {
              this.displayedBids.push(this.player4Bid);
              this.showWinningBid();
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    },
    showWinningBid() {
      setTimeout(() => {
        this.calculateWinningBid();
      }, 800);
    },
    calculateWinningBid() {
      const bids = [this.bid, this.player2Bid, this.player3Bid, this.player4Bid];
      const maxBid = Math.max(...bids);
      this.winningBid = maxBid;
      this.winningPlayer = bids.indexOf(maxBid) + 1;
    },
  },
};
</script>
