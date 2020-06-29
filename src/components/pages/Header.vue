<template>
  <header>
    <div class="header">
      <h1 class="title">Portfolio</h1>

      <!-- PCサイズ -->
      <ul class="nav-bar isPCHidden">
        <li><a href="#" @click="clickSmoothScroll('#top')">Top</a></li>
        <li><a href="#" @click="clickSmoothScroll('#about')">About</a></li>
        <li><a href="#" @click="clickSmoothScroll('#skills')">Skills</a></li>
        <li><a href="#" @click="clickSmoothScroll('#works')">Works</a></li>
      </ul>

      <!-- スマホサイズ -->
      <ul class="hamburger_btn isMobileHidden" @click='activeBtn=!activeBtn'>
        <li class="line line_01" :class="{'btn_line01':activeBtn}"></li>
        <li class="line line_02" :class="{'btn_line02':activeBtn}"></li>
        <li class="line line_03" :class="{'btn_line03':activeBtn}"></li>
      </ul>
      <!--サイドバー-->
      <transition name="menu">
          <ul class="menu" v-if="activeBtn">
              <li><a href="#" @click="clickSmoothScroll('#top')">Top</a></li>
              <li><a href="#" @click="clickSmoothScroll('#about')">About</a></li>
              <li><a href="#" @click="clickSmoothScroll('#skills')">Skills</a></li>
              <li><a href="#" @click="clickSmoothScroll('#works')">Works</a></li>
          </ul>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: false,
    }
  },
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
}

.nav-bar {
  display: flex;
}

.nav-bar li {
  margin-left: 40px;
}

li {
  list-style: none;
}

.nav-bar a {
  color: black;
  text-decoration: none;
}

.nav-bar li:hover {
  cursor: pointer;
  border-bottom: solid 1px #000;
}

.isMobileHidden {
  display: none;
}

@media screen and (max-width: 480px) {

  .isPCHidden {
    display: none;
  }

  .isMobileHidden {
    display: initial;
  }

  .title {
    font-size: 25px;
  }

  .hamburger_btn {
    /* position: fixed; 常に最上部に表示したいので固定 */
    /* top: 0;
    right: 0; */
    height: 37px;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    cursor: pointer;
    z-index: 50;
  }

  .hamburger_btn .line {
    /* position: absolute; */
    width: 32px;
    height: 1px;
    background: #333333;
    list-style: none;
  }

  .hamburger_btn .line_01 {
    transition: 0.4s ease;
  }
  .hamburger_btn .line_02 {
    transition: 0.4s ease;
  }
  .hamburger_btn .line_03 {
    transition: 0.4s ease;
  }

  .btn_line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
  }
  .btn_line02 {
    transition: 0.4s ease;
    opacity: 0;
  }
  .btn_line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
  }

  /*サイドバー*/
  .menu-enter-active, .menu-leave-active {
    transition: opacity 0.4s;
  }
  .menu-enter, .menu-leave-to {
    opacity: 0;
  }
  .menu-leave, .menu-enter-to{
    opacity: 1;
  }

  .menu li {
    list-style: none;
    padding: 1rem;
  }
  .menu {
    background-color: rgba(197, 197, 197, 0.671);
    z-index: 30;
    margin-block-start: 0;
    padding: 2rem 1rem;
    position: fixed;
    width: 15rem;
    height: 80rem;
    top: 0;
    right: 0;
  }
  .menu a {
    color: rgb(66, 66, 66);
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 2rem;
  }
  .menu ul{
    margin: 1rem;
    padding: 0;
  }

}

</style>

<!--
  <ul>
    <li><a href="#" @click="clickSmoothScroll('#top')">Top</a></li>
    <li><a href="#" @click="clickSmoothScroll('#about')">About</a></li>
    <li><a href="#" @click="clickSmoothScroll('#skills')">Skills</a></li>
    <li><a href="#" @click="clickSmoothScroll('#works')">Works</a></li>
  </ul>
-->