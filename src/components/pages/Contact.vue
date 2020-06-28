<template>
  <div id="contact">
    <pageTitle title="Contact"></pageTitle>
    <p>Please give me a message!</p>
    <div class="items">
      <ul>
        <li v-for="(icon, index) in icons" :key="index">
          <a :href="icon.url">
            <img v-bind:src="icon.img">
          </a>
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
        { img: 'https://cdn.svgporn.com/logos/twitter.svg', name: 'twitter', url: 'https://twitter.com/miitaso1045' },
        { img: 'https://cdn.svgporn.com/logos/facebook.svg', name: 'facebook', url: 'https://www.facebook.com/mimaki.kazuhiro' },
        { img: 'https://cdn.svgporn.com/logos/google-gmail.svg', name: 'gmail', url: 'mailto:godblessu0405@gmail.com' },
      ]
    }
  }
}
</script>

<style scoped>

#contact {
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
  padding-top: 100px; /* 打ち消し用のパディング */
}

.items {
  width: 40%;
  margin: 0 auto 200px;
}

p {
  text-align: center;
  margin-bottom: 50px;
  font-size: 20px;
}


ul {
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  padding-left: 0;
}

li {
  list-style: none;
  filter: grayscale(100%);
}

li:hover {
  filter: grayscale(0);
}

img {
  height: 50px;
}

</style>