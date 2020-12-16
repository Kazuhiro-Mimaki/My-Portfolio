<template>
  <div>
    <!-- <div id="app"> -->
    <Header></Header>
    <Top></Top>
    <About></About>
    <Skills></Skills>
    <Works></Works>
    <Footer></Footer>
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import 'normalize.css';
import Header from './components/organisms/Header/Component';
import Footer from './components/organisms/Footer/Component';
import Top from './components/molecules/Top/Component';
import About from './components/molecules/About/Component';
import Skills from './components/molecules/Skills/Component';
import Works from './components/molecules/Works/Component';

export default {
  components: {
    Header,
    Top,
    About,
    Skills,
    Works,
    Footer,
  },
};
</script>

<style>
.vue-typer .custom.char {
  color: rgb(80, 80, 80);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
