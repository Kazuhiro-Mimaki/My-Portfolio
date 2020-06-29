<template>
  <div id="about">
    <pageTitle title="About"></pageTitle>
    <div class="items">
      <div class="portfolio-images">
        <div class="my-img">
          <img src="../../assets/portfolio.jpg">
        </div>
        <ul class="sns-images">
          <li><a href="https://twitter.com/miitaso1045"><img src="../../assets/twitter.png" class="sns"></a></li>
          <li><a href="https://github.com/Kazuhiro-Mimaki"><img src="../../assets/github.png" class="sns"></a></li>
          <li><a href="https://qiita.com/Kazuhiro_Mimaki"><img src="../../assets/qiita.png" class="sns"></a></li>
        </ul>
      </div>
      <ul class="content">
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
        { key: 'Grade', value: '大学の勉強は死なない程度にやってました。就活は終わっていて、来年からは東京でエンジニアとして働きます。' },
        { key: 'About me', value: 'I\'ve studied programming & engineering for about half a year. I can little things about programming, so I will study more and more. I enjoy programming and I love it!' },
      ]
    }
  }
}
</script>

<style scoped>

#about {
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
  padding-top: 100px; /* 打ち消し用のパディング */
}

.items {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin: 0 auto 100px;
}

.my-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-img img {
  width: 80%;
  border-radius: 100%;
}

.sns-images {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-left: 0;
}

li {
  list-style: none;
}

.sns {
  width: 50px;
  margin: 0 20px;
  filter: grayscale(100%);
}

.sns:hover {
  filter: grayscale(0);
}

.content {
  width: 80%;
  padding-left: 0;
}

.content li {
  margin-bottom: 20px;
}

.content h3, .content p {
  margin: 10px;
}

.content p {
  white-space: pre-wrap
}

@media screen and (max-width: 480px) {

  .items {
    display: initial;
  }

  .portfolio-images {
    margin-bottom: 50px;
  }

  .content {
    width: 100%;
  }

  .content h3 {
    font-size: 20px;
  }

  .content p {
    font-size: 15px;
  }
}

</style>