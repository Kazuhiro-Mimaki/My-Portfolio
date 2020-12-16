<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['src', 'href'],
});
</script>

<template>
  <a :href="href">
    <img :src="src" :class="$style.sns" />
  </a>
</template>

<style lang="scss" module>
.sns {
  width: 50px;
  margin: 0 20px;
}
</style>
