<template>
  <div class="home container-fluid">
    <h1>hi</h1>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/bwd2X7dP/GPu-Sale.png" class="" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/vBmxDB2J/Untitled-design-1.png" class="img-fluid" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/pLgsfNMc/Untitled-design.png" class="img-fluid" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/vBmxDB2J/Untitled-design-1.png" class="img-fluid" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <div class="d-flex justify-content-between">
    <h3 class="thead1">Test heading1</h3>
    <router-link to="/product#try">
      <h3 class="span1">view more</h3>
    </router-link>
  </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>

img{
  width: 100%;
  aspect-ratio: 2.5/1;
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

.thead1{
  text-align: start;
}
.span1{
  text-align: end;
}

</style>
