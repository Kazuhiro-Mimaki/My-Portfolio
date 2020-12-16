<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    SectionTitle: require('@/components/atoms/SectionTitle/Component.vue').default,
  },
});
</script>

<template>
  <div :class="$style.section">
    <SectionTitle />

    <slot />
  </div>
</template>

<style lang="scss" module>
.section {
  padding-top: 100px; /* 打ち消し用のパディング */
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
}

.title {
  width: 50%;
  margin: 0 auto 50px;
  font-size: 40px;
  text-align: center;
  border-bottom: solid 2px #555;
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 30px;
  }
}
</style>
