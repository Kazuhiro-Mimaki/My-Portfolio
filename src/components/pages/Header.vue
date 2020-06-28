<template>
  <header>
    <div class="header">
      <h1 class="title">Kazuhiro's Portfolio</h1>
      <ul>
        <!-- @clickイベントでrouter必要 -->
        <li><a href="#" @click="clickSmoothScroll('#top')">Top</a></li>
        <li><a href="#" @click="clickSmoothScroll('#about')">About</a></li>
        <li><a href="#" @click="clickSmoothScroll('#skills')">Skills</a></li>
        <li><a href="#" @click="clickSmoothScroll('#works')">Works</a></li>
        <li><a href="#" @click="clickSmoothScroll('#contact')">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        600,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>

header {
  box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.1);
  top: 0;
  position: sticky;
  background-color: #e0e0e0;
  z-index: 1;
  /* position: fixed; */
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 64px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin-left: 40px;
}

li:hover {
  cursor: pointer;
}

</style>