<template>
    <div>
      <SpinnerComp v-if="loading" />
      <div v-else>
      <AddUser />
    </div>
    <div>
        <div class="container ">
          <div class="table-responsive">
            <table class="table table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Username/Alias</th>
              <th>User age</th>
              <th>Gender</th>
              <th>Email address</th>
              <th>User role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userName }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.userRole }}</td>
              <td class="d-flex gap-2">
                <updateUser :user="user" />
                <button
                  id="deleteUse"
                  class="btn deleteButton"
                  @click="(event) => deleteUser(user.userID)"
                >
                <i class="bi bi-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>

<div>
  <AddProduct/>
</div>

      <div class="container">
          <div class="table-responsive">
            <table class="table table-hover">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Product Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td>
                  {{ product.prodID }}
                </td>
                <td>
                  <img
                    class="img-fluid"
                    id="prodImg"
                    :src="product.img"
                    alt=""
                  />
                </td>
                <td>
                  {{ product.prodName }}
                </td>
                <td>
                  {{ product.category }}
                </td>
                <td>R {{ product.prodPrice }}</td>
                <td>
                  {{ product.quantity }}
                </td>
                <td>{{ product.prodDesc }}</td>
                <td class="d-flex flex-column gap-4">
                  <updateProduct :product="product" />
                  <button
                    id="deleteBut"
                    class="btn deleteButton"
                    @click="(event) => deleteProduct(product.prodID)"
                  >
                  <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>





      </div>
    </div>
</template>

<script>
import AddUser from "../components/AddUser"
import AddProduct from '../components/AddProduct' 
import UpdateUser from "@/components/UpdateUser.vue";
import updateProduct from "../components/UpdateProduct.vue"
import SpinnerComp from "@/components/SpinnerComp.vue";

    export default {
        components:{
            AddUser,AddProduct,UpdateUser,updateProduct,SpinnerComp
        },
        data() {
    return {
      loading: true, // Initially set loading to true
    };
  },
        computed:{
            users(){
                return this.$store.state.users;
            },
            products(){
                return this.$store.state.products;
            },
            // cart() {
            //     return this.$store.state.cart;
            // },
        },
        mounted(){
          Promise.all([
      this.$store.dispatch("fetchUsers"),
      this.$store.dispatch("fetchProducts"),
    ])
      .then(() => {
        // Set loading to false when both fetches are done
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error if needed
      });
        },
        methods: {
          deleteUser(userID) {
        this.$store.dispatch("deleteUser", { id: userID });
      },
      deleteProduct(prodID) {
        this.$store.dispatch("deleteProduct", { id: prodID });
      },
        }
    }
</script>

<style scoped>

img{
    width: 200px;
}
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

#prodImg {
    width: 200px;
    aspect-ratio: 1/1;
}
</style>