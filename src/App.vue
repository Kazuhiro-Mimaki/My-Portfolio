<template>
  <div> <!-- <div id="app"> -->
    <Header></Header>
    <Top></Top>
    <About></About>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header'
import Top from './components/Top'
import About from './components/About'

export default {
  components: {
    Header,
    Top,
    About,
  },
}
</script>

<style>

.vue-typer .custom.char{
  color: aliceblue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
