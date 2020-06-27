<template>
  <div class="skills">
    <!-- <pageTitle title="About"></pageTitle> -->
    <pageTitle title="Skills"></pageTitle>
    <div class="items">
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
        { key: 'About me', value: 'プログラミングを勉強し始めて半年くらい。\nまだまだできることは少ないですが、プログラミング楽しいです。' },
      ]
    }
  }
}
</script>

<style scoped>


</style>