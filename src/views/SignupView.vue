<template>
    <h4 class="">
        Create Your Profile
    </h4>
    <div>
        <form  @submit.prevent="register">
          <!-- <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID">
          </div> -->
          <div class="mb-3">
                <p>First Name:</p>
              <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName" required>
          </div>
          <div class="mb-3">
            <p>Last Name:</p>
              <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName" required >
          </div>
          <div class="mb-3">
            <p>Username:</p>
              <input type="text" class="form-control w-50 mx-auto" placeholder="UserName/Alias" v-model="payload.userName" required>
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
              <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.emailPwd" required>
          </div>
          <div>
            <button type="submit" class="btn" >Sign Up</button>
          </div>
        </form>
    </div>
</template>

  <script>
  import Swal from 'sweetalert2'
  import router from '@/router'
    export default {
        name: 'AddUser',
        data(){
          return{
            payload: {
            //   userID: '',
              firstName:'',
              lastName:'',
              userName:'',
            //   userRole:'',
              gender:'',
              age: '',
              email:'',
              emailPwd:'',
              // userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
            }
          }
        },
        // computed: {
        //   message(){
        //     return this.store.state.message
        //   }
        // },
        methods: {
  // async register() {
  //   try {
  //     await this.$store.dispatch('register', this.payload);
  //     // Optionally, show a success message here
  //   } catch (error) {
  //     // Handle any errors or show error messages
  //     console.error(error);
  //   }
  //   window.location.reload();
  // }
  async register() {
  try {
    await this.$store.dispatch('register', this.payload );
    Swal.fire({
          title: 'Registration Successful',
          text: 'Please wait while you being redirected',
          imageUrl: "https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif",
          imageWidth: 250,
          imageHeight: 250,  
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        //   backdrop: `
        //     width 
        //     rgba(0,0,123,0.4)
        //     url("https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif")
        //     left top
        //     no-repeat
        //     `
        });
        setTimeout(() => {
            router.push({name:'admin'})
        //   window.location.reload();
        }, 2000);

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
p{
    margin: 0px;
}
input{
    border-radius: 50px;
    border: solid rgb(147, 144, 144);
}

select{
    border-radius: 50px;
    border: solid rgb(147, 144, 144);
}

.btn{
    background-color: crimson;
    color: white;
}

</style>