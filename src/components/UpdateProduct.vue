<template>
    <!-- Button trigger modal -->
  <button type="button " class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProdModal">
    <i class="bi bi-pencil-square"></i>
  Update
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="updateProdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="updateProduct">
          <div class="mb-3">
              <input type="number" class="form-control w-50 mx-auto" placeholder="Prod ID" v-model="payload.prodID">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Product" v-model="payload.prodName">
          </div>
          <div class="mb-3">
              <input type="number" class="form-control w-50 mx-auto" placeholder="Price" v-model="payload.prodPrice">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Category" v-model="payload.category">
          </div>
          <div class="mb-3">
              <input type="number" class="form-control w-50 mx-auto" placeholder="Quantity" v-model="payload.quantity">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Description" v-model="payload.prodDesc">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Image" v-model="payload.img">
            </div>
          <!-- <div class="mb-3">
              <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.email">
          </div>
          <div class="mb-3">
              <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.emailPwd">
          </div> -->
          <div class="modal-footer">
            <button type="button" class="btn modClose" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn modAdd" @click="(event) => updateProduct(prodID)">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  
  </template>
  
  <script>
  import Swal from 'sweetalert2'
    export default {
        name: 'UpdateProduct',
        data(){
          return{
            payload: {
              prodID: '',
              prodName:'',
              prodPrice:'',
              category:'',
              quantity:'',
              prodDesc:'',
              img: 'https://i.postimg.cc/XJYqPq88/0-j-Gm-Qz-OLa-Eobi-Nkl-D.png',
            //   email:'',
            //   emailPwd:'',
              // userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
            }
          }
        },

        methods: {

  async updateProduct() {
  try {
    await this.$store.dispatch('updateProduct', { id: this.payload.prodID, data: this.payload });
    Swal.fire({
          title: 'Updated Successfully',
          text: 'Product has been updated successfully!',
          icon: 'success',
        //   timer: 2000,
          showConfirmButton: true
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);

  } catch (error) {
    console.error(error);
    Swal.fire({
          title: 'Error',
          text: 'Failed to update product',
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
  .modalButton {
    color: black;
    /* background-color:#d0368a; */
  border-radius: 5px;
  border: 2px solid ;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  /* padding: 0 20px; */
  cursor: pointer;
  }

  .modalButton:hover {
    background-color: blueviolet;
  color: white;
  border: 2px solid black;

  /* transform: translateY(-2px); */
  transform: translate(2%,-2px);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
}
.modClose{
  position: relative;
    height: 52px;
  /* background-color: #d0368a; */
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

.modClose:hover{
  background-color: crimson; 
  /* background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);  */
  color: white;
  transform: translateY(-2px);
}

.modAdd{
  position: relative;
    height: 52px;
  /* background-color: #d0368a; */
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

.modAdd:hover{
  background-color: #1dd583; 
  /* background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);  */
  color: white;
  transform: translateY(-2px);
}
  </style>