<template>
    <div>
      <!-- User Profile -->
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>{{user.firstName}} {{user.lastName}}</h2>
            <p>Username: {{ user.userName }}</p>
            <p>First Name: {{ user.firstName }}</p>
            <p>Last Name: {{ user.lastName }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Gender: {{ user.gender }}</p>
            <p>Age: {{ user.age }}</p>
            
            <!-- Delete Button -->
            <button @click="(event) => deleteUser(user.userID)" class="deleteButton">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import router from '@/router'
  
  export default {
    computed: {
      ...mapState({
        user: state => state.user
      })
    },
    data() {
      return {
        updatedUser: {
          firstName: '',
          lastName: '',
          email: ''
        }
      };
    },
    methods: {
      ...mapActions(['deleteUser']),
      deleteUser(userID) {
        this.$store.dispatch("deleteUser", { id: userID });
        setTimeout(()=>{
          router.push({name: 'home'})
        },3000),
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }
  </script>

  <style>
  .deleteButton{
  /* background-color:#d0368a; */
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  /* padding: 0 20px; */
  cursor: pointer;
}

.deleteButton:hover{
  background-color: crimson;
  color: white;
  /* transform: translateY(-2px); */
  transform: translate(2%,-2px);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}
.container{
  margin-top: 75px;
  margin-bottom: 75px;
}
  </style>
  