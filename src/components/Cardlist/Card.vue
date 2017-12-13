<template>
  <li class="post">
    <div class="cardinner">
      <div class="imgbox" :style="covercss"></div>
      <h5>{{Carddata.author}}</h5>
      <h3>{{Carddata.title}}</h3>
      <p></p>
    </div>
  </li>
</template>
<script>
export default {
  name: "Card",
  props: {
    Carddata: {
      type: Object,
      default: {}
    }
  },
  computed: {
    coverurl() {
      if (this.Carddata.cover[0] == "/")
        return "http://zashare.org/" + this.Carddata.cover;
      else return this.Carddata.cover;
    },
    covercss() {
      return {
        "background-image": "url(" + this.coverurl + ")"
      };
    }
  }
};
</script>
<style lang="css" scoped>
.imgbox{
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
}
</style>
