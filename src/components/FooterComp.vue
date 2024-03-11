<template lang="">

  <footer id="footerID" class="py-3 container-fluid">
    <div class="container">

      <div class="row">
        <p class="lead">
          Footer text here &copy;
          <span>{{ currYear }}</span>
        </p>
      </div>

      <div class="row">
        <div class="col">
          <p>Col 1 test</p>
        </div>

        <div class="col">
          <p>Col 2 test</p>
          <router-link to="/contact">
            <p>Contact</p>
          </router-link>
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
            <div class="d-flex justify-content-center gap-2">
              <i class="bi bi-github"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-person-circle"></i>
            </div>
          </div>
        </div>

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
}
</style>
