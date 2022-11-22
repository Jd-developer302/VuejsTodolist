<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router= useRouter()

let form = reactive({
    email:'',
    password:'',
 })

 let error = ref('')

 const login = async() =>{
    await axios.post('/api/login', form)
    .then(response =>{
        if(response.data.success){
            localStorage.setItem('token', response.data.data.token)
            router.push('/admin/home')
        } else{
            error.value= response.data.message;
        }
    })
 }
</script>
<template>
    <div>
        <div class="login-page">
          <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                    <div class="card">
                        <p class="text-danger" v-if="error">{{error}}</p>
                        <h1 class="text-center">Login</h1>
                        <form class="form-group" @submit.prevent="login">
                            <input type="email" class="form-control" placeholder="Enter your Email" v-model="form.email"/>
                            <input type="password" class="form-control" placeholder="Enter your Password" v-model="form.password" />
                            <input type="submit" class="btn btn-primary" value="login">
                            <p>Don't have an account?
                                <router-link to="/register">Register</router-link>
                            </p>
                            <p><a href="#">Forgot your password?</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
p {
   line-height: 1rem;
}
.card {
   padding: 20px;
}
.form-group input{
    margin-bottom: 20px;
}
.login-page{
   align-items: center;
   display: flex;
   height: 100vh;
}
h1 {
      margin-bottom: 1.5rem;
   }
</style>