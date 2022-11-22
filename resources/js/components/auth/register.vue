<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router= useRouter()

let form = reactive({
    name:'',
    email:'',
    password:'',
    c_password:'',
 })

 let error = ref('')

 const register = async() =>{
    await axios.post('/api/register', form)
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
  <div class="mask d-flex align-items-center  mt-5">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-3">
                <p class="text-danger" v-if="error">{{error}}</p>
              <h2 class="text-uppercase text-center mb-3">Create an account</h2>

              <form action="" method="post" @submit.prevent="register">

                <div class="form-outline mb-4">
                  <input type="text" class="form-control" placeholder="Enter your Name" v-model="form.name"/>
                </div>

                <div class="form-outline mb-4">
                    <input type="email" class="form-control" placeholder="Enter your Email" v-model="form.email"/>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Enter your Password" v-model="form.password" />
                </div>

                <div class="form-outline mb-4">
                    <input type="password" class="form-control" placeholder="Enter your Password" v-model="form.c_password" />
                </div>

                <div class="form-check d-flex justify-content-center mb-3">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary" value="register">Register</button>
                </div>

                <p class="text-center text-muted mt-3 mb-0">Have already an account? <router-link to="/login">Login</router-link></p>


              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style>


</style>