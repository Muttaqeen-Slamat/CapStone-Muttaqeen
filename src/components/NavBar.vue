<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Logo Placeholder</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 ms-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
              <router-link class="nav-link active" aria-current="page" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item" v-if="!loggedInUser">
            <router-link class="nav-link active" aria-current="page" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item" v-if="!loggedInUser">
            <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="loggedInUser">
            <router-link class="nav-link active" aria-current="page" to="/cart"><i class="bi bi-cart"></i></router-link>
          </li>
          <li class="nav-item profile" v-if="loggedInUser">
            <button class="nav-link active profile text-light" @click="goToProfile" aria-current="page">{{ loggedInUser.firstName }} {{ loggedInUser.lastName }}</button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      // Fetch user data from cookies
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('userAuthenticated='));
      
      // If user cookie exists, parse and return user data
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            return userData.result; // Return user data with firstName and lastName
          } else {
            console.error('Invalid user data format:', userData);
            return null;
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
          return null;
        }
      } else {
        return null; // Return null if user cookie doesn't exist
      }
    },
    isAdmin() {
      return this.loggedInUser && this.loggedInUser.userRole === "Admin";
    }
  },
  methods: {
    goToProfile() {
      this.$router.push('/users/:id');
    }
  },
  mounted() {
    // Fetch user data from cookies and set it in the Vuex store
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const userCookie = cookies.find(cookie => cookie.startsWith('userAuthenticated='));
    if (userCookie) {
      try {
        const userData = JSON.parse(userCookie.split('=')[1]);
        if (userData && userData.result) {
          this.$store.dispatch('setUser', userData.result);
        } else {
          console.error('Invalid user data format:', userData);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }
}
</script>

<style scoped>

nav a{
        display: inline-block;
     position: relative;
     color: rgb(0, 0, 0) ;
     text-decoration: none;
     margin: 0 10px;
     transition: color 0.3s ease-in-out;
      }
    
    nav a.router-link-active {
      /* font-size: 15px; */
      font-style: italic;
      font-weight: bold;
    }
    
      /* nav a:hover {
        color: orangered; 
      }  */
      nav a::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 2px;
     bottom: 0;
     left: 0;
     background-color: blueviolet;
     transform: scaleX(0);
     transform-origin: bottom right;
     transition: transform 0.25s ease-out;
    }
    
    nav a:hover::after {
     transform: scaleX(1);
     transform-origin: bottom left;
    }
.profile:hover{
  background-color: blueviolet;
  color:  white;
  border-radius: 25px;
}
.profile{
  background-color: blueviolet;
  color:  white;
  border-radius: 25px;
}
.profile.router-link-active{
  background-color: blueviolet;
  color: white;
  border-radius: 25px;
}

i{
  border: 1px solid;
  border-radius: 100%;
  padding: 5px;
}
</style>