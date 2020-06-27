<template>
  <div class="contact">
    <pageTitle title="Contact"></pageTitle>
    <div class="items">
      <ul>
        <li v-for="(icon, index) in icons" :key="index">
          <img v-bind:src="icon.url">
        </li>
      </ul>
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
      icons: [
        { url: 'https://cdn.svgporn.com/logos/twitter.svg', name: 'twitter' },
        { url: 'https://cdn.svgporn.com/logos/facebook.svg', name: 'facebook' },
        { url: 'https://cdn.svgporn.com/logos/google-gmail.svg', name: 'gmail' },
      ]
    }
  }
}
</script>

<style scoped>

.items {
  width: 40%;
  margin: 0 auto 200px;
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

img {
  height: 50px;
}

</style>