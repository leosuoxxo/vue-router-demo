<template>
  
<div class="div">
    <h1>會員</h1>
<div class="col-sm-4 loginbox">
        <Login></Login>
        <router-view/>
</div>

</div>
</template>
<script>
import Login from "./Member/Login";
export default {
  name:"Vue"
}
</script>
<style scoped>
/* 使用scoped 會將css綁定在這component上 */
.loginbox{
    border: 1px solid #ccc;
    margin: auto;
    padding: 10px;
}

</style>


