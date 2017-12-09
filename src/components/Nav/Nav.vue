<template>
 <div class="col-sm-12">
     <ul class="row">
         <div class="col-sm-3">
           <router-link to="/hello">hello</router-link>
        </div>
         <div class="col-sm-3">
             <router-link to="/cardlist">cardlist</router-link>
        </div>
         <div class="col-sm-3">
             <router-link to="/member/login">Member</router-link>
        </div>
     </ul>
 </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
