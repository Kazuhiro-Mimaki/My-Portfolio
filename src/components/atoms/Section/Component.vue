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
    <slot />
  </div>
</template>

<style lang="scss" module>
.section {
  max-width: 960px;
  padding-top: 100px; /* 打ち消し用のパディング */
  margin: -50px auto 100px;
}

.title {
  width: 50%;
  margin: 0 auto 50px;
  font-size: 40px;
  text-align: center;
  border-bottom: solid 2px #555;
}

@media screen and (max-width: 480px) {
  .section {
    margin-bottom: 20px;

    .title {
      font-size: 30px;
    }
  }
}
</style>
