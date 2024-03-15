<!-- In your template -->
<template>
  <div class="container-fluid">
    <!-- Login form -->
    <div class="mb-3">
      <input type="email" class="form-control w-50 mx-auto" required placeholder="Email" v-model="payload.email">
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col">
          <input
            class="form-control w-50 mx-auto"
            required
            placeholder="Password"
            v-model="payload.emailPwd"
          />
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="login">Login</button>
    <!-- User list -->
    <div>
      <h2>All Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        email: "",
        emailPwd: ""
      },
    };
  },
  computed: {
    users() {
      // Access users from Vuex store
      return this.$store.state.users;
    }
  },
  methods: {
    login() {
      // Call login action from Vuex store
      this.$store.dispatch('login', this.payload);
    }
    // Other methods...
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
