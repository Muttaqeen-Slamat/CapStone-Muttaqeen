<template>
  <div class="home container-fluid">
    <!-- Carousel -->
    <div id="carouselExampleAutoplaying" class="carousel slide mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/bwd2X7dP/GPu-Sale.png" class="" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/JnVN3YbZ/CPU-Sale.png" class="img-fluid" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Lucky Products -->
    <div class="d-flex text-center justify-content-center mt-5">
      <h3 class="thead1">Lucky Products</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-center justify-content-evenly">
      <Card v-for="product in shuffledProducts" :key="product.prodID" class="mb-3">
        <template #cardHeader>
          <h6 class="card-title">{{ product.prodName }}</h6>
        </template>
        <template #cardBody>
          <img id="img" :src="product.img" class="img-fluid" :alt="`${product.prodName}`" />
          <p class="card-text text-dark bg-gradient p-2">
            R{{ product.prodPrice }}
          </p>
          <router-link :to="{ name: 'product', params: { id: product.prodID } }"><button class="btn">View More</button></router-link>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  computed: {
    product() {
      return this.$store.state.products || [];
    },
    shuffledProducts() {
      let shuffled = [...this.product];
      shuffled.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 4);
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
img {
  width: 100%;
  aspect-ratio: 2.5/1;
}

#img {
    width: 200px;
    aspect-ratio: 1/1;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: rgba(163, 16, 16, 0);
  background-color: rgba(0, 0, 0, 0);
  background-size: 100%, 100%;
  border-radius: 50%;
  /* border: 1px solid black; */
}

.thead1 {
  text-align: start;
}

.span1 {
  text-align: end;
}

.btn {
  position: relative;
  /* height: 52px; */
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

.btn:hover {
  background-color: blueviolet;
  color: white;
  transform: translateY(-2px);
}
</style>
