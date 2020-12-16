<script>
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  components: {
    HeaderLogo: require('@/components/atoms/HeaderLogo/Component.vue').default,
    HeaderNav: () => import('@/components/atoms/HeaderNav/Component.vue'),
    Drawer: () => import('@/components/atoms/HeaderNav/Drawer.vue'),
  },
});
</script>

<template>
  <header>
    <div :class="$style.header">
      <HeaderLogo />

      <HeaderNav />
      <Drawer />
    </div>
  </header>
</template>

<style lang="scss" module>
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
</style>
