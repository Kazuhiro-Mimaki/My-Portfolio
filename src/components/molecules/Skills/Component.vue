<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    Section: require('@/components/atoms/Section/Component.vue').default,
    SectionTitle: require('@/components/atoms/SectionTitle/Component.vue').default,
  },
  setup: () => {
    const languages = ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript', 'Vue.js', 'GitHub', 'Docker'];

    return {
      languages,
    };
  },
});
</script>

<template>
  <Section id="skills">
    <SectionTitle title="Skills" />
    <ul :class="$style.items">
      <li v-for="(language, index) in languages" :key="index">
        {{ language }}
      </li>
    </ul>
  </Section>
</template>

<style lang="scss" module>
.items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 60%;
  max-width: 320px;
  height: 200px;
  padding-left: 0;
  margin: 0 auto;
  color: color(dark, base);

  li {
    margin: 10px;
  }
}

@media screen and (max-width: 480px) {
  .items {
    li {
      padding-top: 10px;
    }
  }
}
</style>
