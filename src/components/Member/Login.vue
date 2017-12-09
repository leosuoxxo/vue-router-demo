<template>
<div class="col-sm-12 login">
 <h2>這是登入</h2>
<form> 
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="col-sm-4 switchbox">
    <router-link to="/member/register">我要註冊</router-link>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>
<script>
export default {
  name:'Login'
}
</script>
<style scoped>

.login{
    margin:auto;
}
.switchbox{
    margin: auto;
    padding: 10px;
}
</style>

