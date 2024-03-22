<template>
    <div class="container">
        <div class="row mt-3">
            <h1 class="">Product Details</h1>
        </div>
        <div>
            <router-link to="/products">
                <p>Go back to products</p>
            </router-link>
        </div>
        <div class="row">
            <Card v-if="product">
                <template #cardHeader>
                    <h6 class="card-title">{{ product.prodName }}</h6>
                </template>
                <template #cardBody>
                    <img :src="product.img" :alt="`${ product.prodName }`">
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Category: {{ product.category }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Description: {{ product.prodDesc }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ product.quantity }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Amount: R{{ product.prodPrice }}
                    </p>
                    <button class="btn btn-primary" @click="addToCart">Add to Cart</button>

                    <!-- <router-link :to="{name: 'product', params: {id: product.prodID}}">View More</router-link> -->
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
    export default {
        components:{
            Card,
        },
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        methods: {
        addToCart() {
  if (this.product) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cartItems.some(item => item.id === this.product.prodID);
    if (!found) {
      // If not found, add the product to the cart
      cartItems.push({ 
        id: this.product.prodID,
        prodName: this.product.prodName,
        prodPrice: this.product.prodPrice,
        quantity: 1 // Assuming initial quantity is 1
      });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      // Inform the user
      alert('Product added to cart!');
    } else {
      // If the product is already in the cart, inform the user
      alert('Product is already in the cart!');
    }
  }
}

  },
        mounted() {
            this.$store.dispatch('fetchProduct', this.$route.params)
        }
    }
</script>

<style scoped>
img{
    width: 200px;
}
</style>