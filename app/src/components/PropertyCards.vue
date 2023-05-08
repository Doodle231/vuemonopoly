<script >
export default { 
  name: 'PropertyCards',
  props: [
    'rent', 
    'rent1house',
    'rent2house',
    'rent3house',
    'rent4house',
    'renthotel',
    'housecost',
    'hotelscost',
  ],

}


</script>


<template>
<div class ="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-slate-100 absolute z-[999] text-4xl">

    <div class ="card-top w-[80%] h-[15%] bg-blue-700 ml-[10%] mt-12 border-black border-4">
<div class ="card-title text-center pt-4"><h2>Propety Deed</h2>
<h1 class = "text-6xl mt-5 font-bold">Park Place</h1>
</div>
</div>


<div class ="card-body mt-16 ml-16 ">
<div class ="rent">Rent {{ rent }}</div>
<div class ="rent-1house">Rent with 1 house {{rent1house }}</div>
<div class ="rent-2house">Rent with 2  houses {{rent2house }}</div>
<div class ="rent-3house">Rent with 3  houses {{rent3house }}</div>
<div class ="rent-4house">Rent with 4  houses {{rent4house }}</div>
<div class ="rent-hotel">Rent with hotel {{ renthotel }}</div>

<div class ="house-cost">Houses Cost {{ housecost }}</div>
<div class ="hotels-cost">Hotels Cost {{ hotelscost }}</div>
</div>

</div>
</template>


