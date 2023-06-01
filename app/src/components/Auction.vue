<template>
    <div >
    <h1 class ="text-6xl">Hey there this is from auction</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Auction',
    props: ['auctionIsActive'],
  
    setup(props) {
      console.log(props.auctionIsActive);
    },


  };
  </script>
  