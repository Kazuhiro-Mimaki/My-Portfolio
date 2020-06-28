<template>
  <div class="about">
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
        { key: 'University', value: 'Kyoto University (Faculty of Economics)\n2017.04 - 2021.03' },
        { key: 'Grade', value: '大学の勉強は死なない程度にやってました。ありがたいことに短修制度のお声がけもいただきましたが、院進のモチベもないので4年で卒業します。' },
        { key: 'About me', value: 'I\'ve studied programing & engineering for about half a year. I can little things about programming, so I will study more and more. I enjoy programming and I love it!' },
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
  margin: 0 auto 200px;
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

.items p {
  white-space: pre-wrap
}

</style>