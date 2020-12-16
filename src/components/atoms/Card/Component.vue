<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['src', 'href', 'title', 'detail', 'languages'],
});
</script>

<template>
  <a :class="$style.component" :href="href" target="_blank">
    <img :src="src" :alt="title" />
    <div :class="$style.content">
      <h3>{{ title }}</h3>
      <p :class="$style.detail">
        {{ detail }}
      </p>
      <p>{{ languages }}</p>
    </div>
  </a>
</template>

<style lang="scss" module>
.component {
  display: block;
  text-decoration: none;

  img {
    width: 100%;
    border-bottom: solid 1px #ccc;
  }

  .content {
    padding: 0 20px 20px;

    .detail {
      text-align: left;
    }

    p {
      color: rgb(50, 50, 50);
    }
  }
}

@media screen and (max-width: 480px) {
  .component {
    .content {
      p {
        font-size: 15px;
      }
    }
  }
}
</style>
