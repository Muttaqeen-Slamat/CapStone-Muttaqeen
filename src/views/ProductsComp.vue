<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Products</h2>
        </div>
        <div class="row d-flex align-items-center justify-content-center" v-if="product">
            <Card v-for="product in product" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img :src="product.img" :alt="`${ product.prodName }`">
                    <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Category: {{ product.category }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Description: {{ product.prodDesc }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ product.quantity }}
                    </p> -->
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
        computed: {
            product() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

img{
    width: 200px;
    aspect-ratio: 1/1;
}

</style>