<script>
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  components: {
    HeaderLogo: require('@/components/atoms/HeaderLogo/Component.vue').default,
    HeaderNav: require('@/components/atoms/HeaderNav/Component.vue').default,
  },

  setup: () => {
    const drawer = reactive({
      isEnabled: false,
    });

    const onEnabled = () => {
      drawer.isEnabled = true;
    };

    const onDisabled = () => {
      drawer.isEnabled = false;
    };

    return {
      drawer,
      onEnabled,
      onDisabled,
    };
  },
});
</script>

<template>
  <header>
    <div class="header">
      <HeaderLogo />

      <!-- PCサイズ -->
      <HeaderNav />

      <!-- スマホサイズ -->
      <ul class="hamburger_btn isMobileHidden" @click="drawer.isEnabled = !drawer.isEnabled">
        <li class="line line_01" :class="{ btn_line01: drawer.isEnabled }"></li>
        <li class="line line_02" :class="{ btn_line02: drawer.isEnabled }"></li>
        <li class="line line_03" :class="{ btn_line03: drawer.isEnabled }"></li>
      </ul>

      <!--サイドバー-->
      <transition name="menu">
        <ul class="menu" v-if="drawer.isEnabled">
          <li><a href="#top">Top</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#works">Works</a></li>
        </ul>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
}

li {
  list-style: none;
}

.isMobileHidden {
  display: none;
}

@media screen and (max-width: 480px) {
  .isMobileHidden {
    display: initial;
  }

  .hamburger_btn {
    z-index: 50;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    /* top: 0;
    right: 0; */
    height: 37px;
    cursor: pointer;
  }

  .hamburger_btn .line {
    /* position: absolute; */
    width: 32px;
    height: 1px;
    list-style: none;
    background: #333;
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
    transition: 0.4s ease;
    transform: translateY(10px) rotate(-45deg);
  }

  .btn_line02 {
    opacity: 0;
    transition: 0.4s ease;
  }

  .btn_line03 {
    transition: 0.4s ease;
    transform: translateY(-10px) rotate(45deg);
  }

  /* サイドバー */
  .menu-enter-active,
  .menu-leave-active {
    transition: opacity 0.4s;
  }

  .menu-enter,
  .menu-leave-to {
    opacity: 0;
  }

  .menu-leave,
  .menu-enter-to {
    opacity: 1;
  }

  .menu li {
    padding: 1rem;
    list-style: none;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    width: 15rem;
    height: 80rem;
    padding: 2rem 1rem;
    background-color: rgba(197, 197, 197, 0.671);
    margin-block-start: 0;
  }

  .menu a {
    padding: 0 2rem;
    font-size: 1.2rem;
    color: rgb(66, 66, 66);
    text-decoration: none;
  }

  .menu ul {
    padding: 0;
    margin: 1rem;
  }
}
</style>
