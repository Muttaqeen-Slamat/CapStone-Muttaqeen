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
    <form>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
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
form {
    display: block;
    margin-top: 0em;
}
</style>
