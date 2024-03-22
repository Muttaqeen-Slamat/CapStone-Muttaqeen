<template>
  <div class="container">
    <form>
      <h4 class="mt-3 mb-3">Log In</h4>

      <div class="form-floating w-50 mx-auto m-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="payload.email" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating w-50 mx-auto m-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
          v-model="payload.emailPwd" />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn login" type="button" @click="login">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        email: "",
        emailPwd: "",
      },
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
};
</script>

<style scoped>
form {
  display: block;
  margin-top: 0em;
  border: 1px solid black; /* Add border */
  border-radius: 25px; /* Add border radius */
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Add box shadow */
}

button {
  margin-bottom: 100px;
}

.btn {
  position: relative;
  height: 52px;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: blueviolet;
  color: white;
  transform: translateY(-2px);
}
</style>