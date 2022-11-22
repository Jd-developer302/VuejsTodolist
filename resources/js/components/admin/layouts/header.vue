<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()

const logout = () =>{
    localStorage.removeItem('token')
    router.push('/')
 }
</script>
<template>
    <nav class="navbar navbar-light" style="background-color: #55aaff;">
  <div class="container">
    <a class="navbar-brand" style="color:#fff;">Dashboard</a>
    <div class="d-flex">
      <button type="button" class="btn" style="border-color:aliceblue; color: #fff;" @click="logout">Logout</button>
    </div>
  </div>
</nav>

</template>