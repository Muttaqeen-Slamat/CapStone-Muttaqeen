<template lang="">

  <footer id="footerID" class="py-4 container-fluid">
    <div class="container">

      

      <div class="row mt-3">
        <div class="col text-decoration-underline">
          <p>Pages</p>
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/products">
            <p>Products</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>

        <div class="col">
          <p class="text-decoration-underline">Developer's Details</p>
          <div>
            <div>
              <p>Muttaqeen Slamat</p>
            </div>
            <div>
              <p>Email: <span>muttaqeens@gmail.com</span></p>
            </div>
            <div class="d-flex justify-content-center gap-2 rcol">
              <a href="https://github.com/Muttaqeen-Slamat" target="_blank"><i class="bi bi-github">Github</i></a>
              <a href="https://www.linkedin.com/in/muttaqeen-slamat-95209019b/" target="_blank"><i class="bi bi-linkedin">Linkedin</i></a>
            </div>
          </div>
        </div>

      </div>

      <div class="row mt-3">
        <p class="lead">
          CompanyName &copy;
          <span>{{ currYear }}</span>
        </p>
      </div>

    </div>
  </footer>

</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>
<style>
#footerID {
  position: absolute;
  background-color: rgb(212, 212, 212);
  color: black;
  text-decoration-style: none ;
}


i{
  color: black;
  text-decoration: underline;
}

.col2{
  color: black;
  text-decoration: none;
}

p{
  color: black;
}

</style>
