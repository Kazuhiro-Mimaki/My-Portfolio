<template>
  <div class="skills">
    <!-- <pageTitle title="About"></pageTitle> -->
    <pageTitle title="Skills"></pageTitle>
    <div class="items">
      <ul>
        <li v-for="(language, index) in languages" :key="index">
          <img v-bind:src="language.url">
          <h5>{{ language.name }}</h5>
        </li>
      </ul>
      <!-- <img v-for="(language, index) in languages" :key="index" v-bind:src="language.url"> -->
    </div>
  </div>
</template>

<script>
import pageTitle from '../modules/pageTitle'

export default {
  components: {
    pageTitle,
  },
  data() {
    return {
      languages: [
        { url: 'https://cdn.svgporn.com/logos/html-5.svg', name: 'HTML' },
        { url: 'https://cdn.svgporn.com/logos/css-3.svg', name: 'CSS' },
        { url: 'https://cdn.svgporn.com/logos/ruby.svg', name: 'Ruby' },
        { url: 'https://cdn.svgporn.com/logos/rails.svg', name: 'Ruby on Rails' },
        { url: 'https://cdn.svgporn.com/logos/javascript.svg', name: 'JavaScript' },
        { url: 'https://cdn.svgporn.com/logos/vue.svg', name: 'Vue.js' },
        { url: 'https://cdn.svgporn.com/logos/c-plusplus.svg', name: 'C++' },
        { url: 'https://cdn.svgporn.com/logos/github-icon.svg', name: 'Github' },
      ]
    }
  }
}
</script>

<style scoped>

.items {
  width: 80%;
  margin: 0 auto;
}

img {
  height: 50px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  padding-left: 0;
}

li {
  list-style: none;
}

h5 {
  text-align: center;
}

</style>