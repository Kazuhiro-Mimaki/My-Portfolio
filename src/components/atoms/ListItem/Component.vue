<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['item', 'content'],
});
</script>

<template>
  <div :class="$style.list_item">
    <h3>{{ item }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<style lang="scss" module>
.list_item {
  h3,
  p {
    margin: 10px;
  }

  p {
    white-space: pre-wrap;
  }
}

@media screen and (max-width: 480px) {
  .list_item {
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
