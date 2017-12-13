<template>
  <div>
    <h1>Welcome!! Hello Component</h1>
    <!-- <h2>{{ $t("login") }}</h2> -->
    <select name="" id="" v-model="lang" @change="alert">
      <option value="en">en</option>
      <option value="tw">tw</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Hello",
  data() {
    return {
      lang: '',
    };
  },
  methods: {
    setLangNew: function(lang){
      this.$store.dispatch('setLangNew', lang)
    },
    setLang: function(){
      this.$store.dispatch('setLang', this.lang)
    },
    alert:function(){
      alert($('h1').text());
    }
  }
};
</script>
<style scoped>

</style>


