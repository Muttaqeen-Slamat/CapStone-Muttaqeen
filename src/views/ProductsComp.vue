<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Products</h2>
        </div>
        <!-- Search input -->
        <div class="row">
            <input type="text" v-model="searchQuery" placeholder="Search products">
        </div>
        <!-- Products list -->
        <div class="row d-flex align-items-center justify-content-center" v-if="filteredProducts.length">
            <Card v-for="product in filteredProducts" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img :src="product.img" :alt="`${ product.prodName }`">
                    <p class="card-text text-dark bg-gradient p-2">
                        R{{ product.prodPrice }}
                    </p>
                    <router-link :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
                </template>
            </Card>
        </div>
        <div id="try">
            <p>test</p>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView', 
    components:{
        Card
    },
    data() {
        return {
            searchQuery: '',
        };
    },
    computed: {
        product() {
            return this.$store.state.products;
        },
        filteredProducts() {
            // Filter products based on search query
            return this.product.filter(product =>
                product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        sortProducts() {
            // You can implement sorting logic here
            // Example: Sort products based on price
            this.product.sort((a, b) => a.prodPrice - b.prodPrice);
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>

img{
    width: 200px;
    aspect-ratio: 1/1;
}

</style>
