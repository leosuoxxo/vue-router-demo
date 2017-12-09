<template>
 <div id="cardList" class="container">
   <div class="row">
     <div class="col-sm-12">
       <h2>cardlist</h2>
       <hr>
     </div>
    <div class="col-sm-12">
      <ul class="d-flex flex-wrap">
    <li class="post" v-for="item in cards" :key="item.id">
        <div class="cardinner">
            <div class="imgbox">
              <img class="img-fluid" :src="item.cover" alt="">
            </div>
            <h5>{{item.author}}</h5>
            <h3>{{item.title}}</h3>
            <p></p>
        </div>
    </li>
    </ul>
 </div>

   </div>
 </div>
</template>
<script>

const carddata=[
{
id: 43,
title: "尋找夢想工作，開拓職涯新視野",
tag: "C",
cover: "http://zashare.org/dropzone/uploads/2017_03_10_04_31_40_20161127-IMG_9131-compressor.jpg ",
author: "記者/周天心 責任編輯/王芳瑋 總編輯/雜學校編審團",
},{
id: 52,
title: "讓教育領著設計前進",
tag: "C",
cover: "http://zashare.org/dropzone/uploads/2017_03_10_11_42_02_IMG_4942-compressor.jpg ",
author: "記者/邱孟津 責任編輯/賴心樺 總編輯/雜學校編審團",
},
{
id: 42,
title: "用副本，發掘你的無限可能",
tag: "B",
cover: "http://zashare.org/dropzone/uploads/2017_03_16_02_25_59_IMG_2062-compressor.jpg ",
author: "記者/蘇筱媛 責任編輯/郭彥霆 總編輯/雜學校編審團",
}
];
export default {
  name: "Cardlist",
  data() {
    return {
      cards: carddata
    };
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
