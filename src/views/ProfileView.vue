<template>
    <div>
      <!-- User Profile -->
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <h2>User Profile</h2>
            <p>Username: {{ user.firstName }} {{ user.lastName }}</p>
            <p>Email: {{ user.email }}</p>
            
            <!-- Update Form -->
            <form @submit.prevent="updateUserProfile">
              <input v-model="updatedUser.firstName" placeholder="First Name">
              <input v-model="updatedUser.lastName" placeholder="Last Name">
              <input v-model="updatedUser.email" placeholder="Email">
              <button type="submit">Update Profile</button>
            </form>
            
            <!-- Delete Button -->
            <button @click="(event) => deleteUser(user.userID)">Delete Account</button>
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
      ...mapActions(['updateUser', 'deleteUser']),
      async updateUserProfile() {
        await this.$store.dispatch("updateUser", { id: this.user.id, data: this.updatedUser });
        this.updatedUser = { firstName: '', lastName: '', email: '' };
      },
      deleteUser(userID) {
        this.$store.dispatch("deleteUser", { id: userID });
        router.push({name: 'home'})
      }
    }
  }
  </script>
  