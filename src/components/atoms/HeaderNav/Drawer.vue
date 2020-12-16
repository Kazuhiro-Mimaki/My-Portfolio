<script>
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
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
  <div :class="$style.drawer">
    <!-- ハンバーガーメニュー -->
    <ul :class="$style.hamburger_btn" @click="drawer.isEnabled = !drawer.isEnabled">
      <li :class="{ btn_line01: drawer.isEnabled }"></li>
      <li :class="{ btn_line02: drawer.isEnabled }"></li>
      <li :class="{ btn_line03: drawer.isEnabled }"></li>
    </ul>

    <!-- 開いた時のサイドメニュー -->
    <transition name="menu">
      <ul :class="$style.menu" v-if="drawer.isEnabled">
        <li><a href="#top">Top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#works">Works</a></li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" module>
.drawer {
  .hamburger_btn {
    display: none;
  }

  li {
    list-style: none;
  }
}

@media screen and (max-width: 480px) {
  .hamburger_btn {
    z-index: 50;
    display: flex;
    display: initial;
    flex-flow: column;
    justify-content: space-evenly;
    height: 37px;
    cursor: pointer;

    li {
      width: 32px;
      height: 1px;
      list-style: none;
      background: #333;
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

    ul {
      padding: 0;
      margin: 1rem;

      li {
        padding: 1rem;
        list-style: none;

        a {
          padding: 0 2rem;
          font-size: 1.2rem;
          color: rgb(66, 66, 66);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
