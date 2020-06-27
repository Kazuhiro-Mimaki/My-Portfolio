<template>
  <div class="about">
    <!-- <pageTitle title="About"></pageTitle> -->
    <pageTitle title="About"></pageTitle>
    <div class="items">
      <img src="../../assets/portfolio.jpg">
      <ul>
        <li v-for="(subject, index) in subjects" :key="index">
          <h3>{{ subject.key }}</h3>
          <p>{{ subject.value }}</p>
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
      subjects: [
        { key: 'Name', value: 'Kazuhiro Mimaki' },
        { key: 'Age', value: '22' },
        { key: 'University', value: 'Kyoto University (Faculty of Economics)' },
        { key: 'About me', value: 'プログラミングを勉強し始めて半年ちょっと。\nまだまだできることは少ないですが、プログラミング楽しいです。' },
      ]
    }
  }
}
</script>

<style scoped>

.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto 100px;
}

.items img {
  width: 40%;
  border-radius: 100%;
}

.items ul {
  width: 50%;
}

.items li {
  list-style: none;
  margin-bottom: 20px;
}

.items h3, .items p {
  margin: 10px;
}

</style>