<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['title'],
});
</script>

<template>
  <h2 :class="$style.title">
    {{ title }}
  </h2>
</template>

<style lang="scss" module>
.title {
  width: 50%;
  margin: 0 auto 50px;
  font-size: 40px;
  text-align: center;
  border-bottom: solid 6px color(dark, base);
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 30px;
  }
}
</style>
