<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <h1 class="">Products</h1>
        </div>
        <!-- Search input -->
        <div class="row mx-2 my-2 ">
            <div class="mt-2 mt-2 ">
                <input type="text" v-model="searchQuery" placeholder="Search products" class="p-2">
            </div>
            <div class="dropdown mt-2 mb-2">
                <button class="btn dropdown-toggle filterB" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter by:
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" @click="setFilter('')">All</a></li>
                    <li><a class="dropdown-item" @click="setFilter('GPU')">GPU</a></li>
                    <li><a class="dropdown-item" @click="setFilter('CPU')">CPU</a></li>
                    <li><a class="dropdown-item" @click="setFilter('Motherboard')">Motherboard</a></li>
                </ul>
            </div>
            <div class="mt-2 mb-2 ">
                <button class="sort" @click="sortProducts">Sort by price</button>
            </div>
        </div>
        <!-- Products list -->
        <div class="row d-flex align-items-center justify-content-center mb-3">
            <Card v-for="product in filteredProducts" :key="product.prodID">
                <template #cardHeader>
                    <h6 class="card-title">{{ product.prodName }}</h6>
                </template>
                <template #cardBody>
                    <img :src="product.img" class="img-fluid" :alt="`${product.prodName}`">
                    <p class="card-text text-dark bg-gradient p-2">
                        R{{ product.prodPrice }}
                    </p>
                    <router-link :to="{ name: 'product', params: { id: product.prodID } }">View More</router-link>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card
    },
    data() {
        return {
            searchQuery: '',
            selectedFilter: ''
        };
    },
    computed: {
        product() {
            return this.$store.state.products || []; 
        },
        filteredProducts() {
            let filtered = this.product;
            if (this.selectedFilter) {
                filtered = filtered.filter(product => product.category === this.selectedFilter);
            }
            if (this.searchQuery) {
                filtered = filtered.filter(product =>
                    product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            return filtered;
        }
    },
    methods: {
        sortProducts() {
            // Toggle sorting order
            this.isSortedAscending = !this.isSortedAscending;
            // Sort products by price
            this.product.sort((a, b) => {
                if (this.isSortedAscending) {
                    return a.prodPrice - b.prodPrice;
                } else {
                    return b.prodPrice - a.prodPrice;
                }
            });
        },
        setFilter(filter) {
            this.selectedFilter = filter;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>
img {
    width: 200px;
    aspect-ratio: 1/1;
}

/* input {
    width: auto;
    padding: 10px;
    border: 1px solid;
    border-radius: 50px;
} */

.filterB {
    position: relative;

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

  .filterB:hover { 
  background-color: #1dd583; 
  /* background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);  */
  color: white;
  transform: translateY(-2px);
}
.sort {
    position: relative;

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

  .sort:hover { 
  background-color: #1dd583; 
  /* background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);  */
  color: white;
  transform: translateY(-2px);
}
</style>
