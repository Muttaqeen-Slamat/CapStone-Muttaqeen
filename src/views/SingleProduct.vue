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