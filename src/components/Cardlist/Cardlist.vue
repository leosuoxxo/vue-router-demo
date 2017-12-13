<template>
 <div id="cardList" class="container">
   <div class="row">
     <div class="col-sm-12">
       <h2>cardlist</h2>
       <hr>
     </div>
    <div class="col-sm-12">
      <ul class="d-flex flex-wrap">
        <Card v-for="item in carddata" :key="item.id" :Carddata="item"></Card>
    </ul>
 </div>

   </div>
 </div>
</template>
<script>
import {getCardAjax} from "../../ajax";
import Card from "./Card";
export default {
  name: "Cardlist",
  components: {
    Card
  },
  data() {
    return {
      carddata: []
    };
  },
  created () {
    const that = this;
    getCardAjax.done(function(data){
      that.carddata = data;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{
  font-size: 16px;
}
h3{
  font-size: 20px;
}
li{
  list-style: none;
  border: 1px solid #ccc;
  margin: 1%;
  width: 31%;
}
</style>
