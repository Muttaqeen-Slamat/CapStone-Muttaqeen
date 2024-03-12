<template>
    <div class="container-fluid">
      <form @submit.prevent="login">
        <div class="container d-flex text-center justify-content-center align-items-center">
          <p>Hi</p>
        </div>
        <div>
          <p>Email</p>
          <input v-model="email" type="text" placeholder="example@email.com">
        </div>
        <div>
          <p>Password</p>
          <input v-model="password" type="password" placeholder="Password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import AuthenticateUser from '@/service/AuthenticateUser'; // Assuming this file contains your authentication logic
  import router from '@/router'; // Assuming you have a router instance imported
  const capUrl = 'https://capstone-muttaqeen.onrender.com/'

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const payload = {
            email: this.email,
            password: this.password,
          };
  
          const { msg, token, result } = (await axios.post(`${capUrl}users/login`, payload)).data;
  
          if (result) {
            this.$store.commit('setUser', { msg, result });
            this.$store.dispatch('setUser');
            this.$cookies.set('LegitUser', {
              msg,
              token,
              result,
            });
            AuthenticateUser.applyToken(token);
            Swal.fire({
              title: 'Login Successful',
              text: 'You have successfully logged in!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: true,
            });
            router.push({ name: 'home' });
          } else {
            Swal.fire({
              title: 'Info',
              text: msg,
              icon: 'info',
              timer: 2000,
            });
          }
        } catch (e) {
          Swal.fire({
            title: 'Error',
            text: 'Failed to login',
            icon: 'error',
            timer: 2000,
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: crimson;
    border: solid black 2px;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  p {
    color: rgb(0, 0, 0);
  }
  
  input {
    border: solid black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  <!-- <template>
    <div class="container-fluid">
        <div class="container d-flex text-center justify-content-center align-items-center">
            <p>Hi</p>
        </div>
        <div>
            <p>Email</p>
            <input id="top" type="text" placeholder="example@email.com">
        </div>
        <div>
            <p>Password</p>
            <input id="bottom" type="text" placeholder="Password">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    background-color: crimson;
    border: solid black 2px;
    border-radius: 25px;
    padding: 100px;
    width: 100px;
    height: 100px;
    margin-bottom: 75px;
}

p{
    color: rgb(0, 0, 0);
}

#top{
    border: solid black;
    border-radius: 50px;
    padding: 10px;
}

#bottom{
    border: solid black;
    border-radius: 50px;
    padding: 10px;    
}
</style> -->