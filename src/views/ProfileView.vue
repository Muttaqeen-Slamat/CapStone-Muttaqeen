<template>
  <div>
    <!-- User Profile -->
    <div class="container mt-3 mb-3">
      <div class="row detail">
        <div class="col" v-if="user">
          <h2>{{ user.firstName }} {{ user.lastName }}</h2>
          <p>Username: {{ user.userName }}</p>
          <p>First Name: {{ user.firstName }}</p>
          <p>Last Name: {{ user.lastName }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Gender: {{ user.gender }}</p>
          <p>Age: {{ user.age }}</p>

          <!-- Edit Form -->
          <div v-if="editing" class="container border border-3 rounded-5 py-3 px-3">
            <form @submit.prevent="updateUser" class="d-flex flex-column" >
              <label>First Name:</label>
              <input type="text" v-model="editedUser.firstName" />
              <label>Last Name:</label>
              <input type="text" v-model="editedUser.lastName" />
              <label>Email:</label>
              <input type="email" v-model="editedUser.email" />
              <label>Gender:</label>
              <input type="text" v-model="editedUser.gender" />
              <label>Age:</label>
              <input type="number" v-model="editedUser.age" />
              <div class="d-flex justify-content-center justify-content-evenly">
                <button type="submit" class="save">Save</button>
                <button @click="cancelEdit" class="cancel">Cancel</button>
              </div>
              <div class="mt-4">
                <p>*Update to Profile will apply when you log in again*</p>
              </div>
            </form>
          </div>
          <div class="mt-3 mb-3">
            <button @click="editProfile" class="editButton">Edit</button>
          </div>
          <div class="d-flex justify-content-evenly p-3">
            <button @click="(event) => deleteUser(user.userID)" class="deleteButton">Delete Account</button>
            <button @click="logoutUser" class="logoutButton">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      editing: false,
      editedUser: {},
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    editProfile() {
      // Copy user data to editedUser for editing
      this.editedUser = { ...this.user };
      this.editing = true;
    },
    cancelEdit() {
      // Cancel editing, revert changes
      this.editing = false;
      this.editedUser = {};
    },
    async updateUser() {
      try {
        await this.$store.dispatch("updateUser", {
          id: this.user.userID,
          data: this.editedUser,
        });
        await this.fetchUserData();
        this.editing = false;
        this.editedUser = {};
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
    fetchUserData() {
      const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
      const userCookie = cookies.find((cookie) =>
        cookie.startsWith("userAuthenticated=")
      );
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split("=")[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error("Invalid user data format:", userData);
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        console.log("No user data available in cookies");
      }
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
      this.$router.push("/login");
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.logoutButton:hover {
  background-color: blueviolet;
  color: white;
  /* transform: translateY(-2px); */
  transform: translate(2%, -2px);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}
.logoutButton {
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

.deleteButton {
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

.deleteButton:hover {
  background-color: crimson;
  color: white;
  /* transform: translateY(-2px); */
  transform: translate(2%, -2px);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}

.editButton{
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

.editButton:hover{
  background-color: #1dd583;
  color: white;
  /* transform: translateY(-2px); */
  transform: translate(2%, -2px);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}


input[type="text"], input[type="email"], input[type="number"] {
  border: 2px solid #ccc; /* Add border */
  border-radius: 5px; /* Add border-radius */
  padding: 8px; /* Add padding */
  width: 100%; /* Make the input full width */
  margin-bottom: 10px; /* Add some space below the input */
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}

.save {
  border-radius: 5px;
  width: 100px; /* Adjust button width */
  display: flex;
  justify-content: center;
  align-items: center;
}

.cancel {
  border-radius: 5px;
  width: 100px; /* Adjust button width */
  display: flex;
  justify-content: center;
  align-items: center;
}


.detail{
  border: 1px solid black;
  border-radius: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}


</style>