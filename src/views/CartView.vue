<template>
  <div class="container">
    <div class="mt-3">
      <h1>My Cart</h1>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td>{{ item.prodName }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.prodPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>Total Price: R{{ totalPrice }}</div>
        <div class="mt-3 mb-3">
          <button @click="purchaseItems" class="buy">Purchase All Items</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.quantity * item.prodPrice), 0);
    }
  },
  methods: {
    purchaseItems() {
      localStorage.removeItem('cart'); // Clearing cart from local storage
      setTimeout(() => {
        window.location.reload()
      }, 750); // Displaying a thank you message
      alert('Thank you for buying!');
    }
  }
}
</script>

<style scoped>
.buy {
  position: relative;
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

.buy:hover { 
  background-color: blueviolet; 
  color: white;
  transform: translateY(-2px);
}
</style>
