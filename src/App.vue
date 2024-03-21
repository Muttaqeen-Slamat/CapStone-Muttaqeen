<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterComp from './components/FooterComp'

export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>
  
<style>
#app {
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255); 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);; 
  border-radius: 10px;
}

input {
    border-radius: 25px;
  }

</style>
