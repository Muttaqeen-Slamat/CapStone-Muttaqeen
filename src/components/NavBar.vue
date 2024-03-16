<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          <router-link class="nav-link active" aria-current="page" to="/admin">Admin </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/signup">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
            <button v-if="loggedInUser" class="nav-link active" @click="goToProfile">{{ loggedInUser.firstName }} {{ loggedInUser.lastName }}</button>
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
      return this.$store.state.user; 
    }
  },
  methods: {
    goToProfile() {
      this.$router.push('/users/:id');
    }
  }
    }
</script>

<style scoped>

</style>