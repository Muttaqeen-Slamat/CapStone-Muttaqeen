<template>
  <div>
    <!-- User Profile -->
    <div class="container">
      <div class="row">
        <div class="col" v-if="user">
          <h2>{{user.firstName}} {{user.lastName}}</h2>
          <p>Username: {{ user.userName }}</p>
          <p>First Name: {{ user.firstName }}</p>
          <p>Last Name: {{ user.lastName }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Gender: {{ user.gender }}</p>
          <p>Age: {{ user.age }}</p>
          
          <!-- Delete Button -->
          <button @click="(event) => deleteUser(user.userID)" class="deleteButton">Delete Account</button>
          <!-- <UpdateProfile/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('userAuthenticated='));
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error('Invalid user data format:', userData);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.log('No user data available in cookies');
      }
    },
    editUser() {
      this.$router.push({ name: 'editProfile' });
    },
    async deleteUser() {
      try {
        await this.$store.dispatch('deleteUser', { id: this.user._id });
        this.fetchUserData(); // Fetch updated user data after deletion
        this.$router.push('/login');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  }
};
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