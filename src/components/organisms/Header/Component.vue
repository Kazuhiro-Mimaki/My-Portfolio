<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    HeaderNav: () => import('@/components/atoms/HeaderNav/Component.vue'),
    Drawer: () => import('@/components/atoms/HeaderNav/Drawer.vue'),
  },
});
</script>

<template>
  <header>
    <HeaderNav />
  </header>
</template>

<style lang="scss" module>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #e0e0e0;
  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 480px) {
  header {
    height: 60px;
  }
}
</style>
