<template>
  <div class="container sign">
    <h4 class="mt-3 mb-3">
      Create Your Profile
    </h4>
    <div>
      <form @submit.prevent="register">
        <!-- <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID">
          </div> -->
        <div class="mb-3">
          <p>First Name:</p>
          <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName"
            required>
        </div>
        <div class="mb-3">
          <p>Last Name:</p>
          <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName"
            required>
        </div>
        <div class="mb-3">
          <p>Username:</p>
          <input type="text" class="form-control w-50 mx-auto" placeholder="UserName/Alias" v-model="payload.userName"
            required>
        </div>
        <div class="mb-3">
          <p>Age:</p>
          <input type="number" class="form-control w-50 mx-auto" placeholder="Age" v-model="payload.age" required>
        </div>
        <!-- <div class="mb-3">
            <p>Gender:</p>
              <input type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender">
          </div> -->
        <div class="mb-3">
          <p>Gender:</p>
          <select type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <!-- <div class="mb-3">
            <p>Your Role</p>
              <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole">
            </div> -->
        <div class="mb-3">
          <p>Email:</p>
          <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.email" required>
        </div>
        <div class="mb-3">
          <p>Password:</p>
          <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.emailPwd"
            required>
        </div>
        <div>
          <button type="submit" class="btn mt-3 mb-3 ">Sign Up</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'AddUser',
  data() {
    return {
      payload: {
        //   userID: '',
        firstName: '',
        lastName: '',
        userName: '',
        //   userRole:'',
        gender: '',
        age: '',
        email: '',
        emailPwd: '',
        // userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
      }
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', this.payload);
        Swal.fire({
          title: 'Registration Successful',
          text: 'Please wait while you being redirected',
          imageUrl: "https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif",
          imageWidth: 250,
          imageHeight: 250,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to add user',
          icon: 'error',
          timer: 2000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }

  }
}
</script>

<style scoped>
p {
  margin: 0px;
}

input {
  border-radius: 50px;
  border: solid rgb(147, 144, 144);
}

select {
  border-radius: 50px;
  border: solid rgb(147, 144, 144);
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
  background-color: #1dd583;
  color: white;
  transform: translateY(-2px);
}

.sign {
  border: 1px solid black;
  border-radius: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

}
</style>