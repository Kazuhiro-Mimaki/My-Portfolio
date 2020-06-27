<template>
  <div class="works">
    <pageTitle title="Works"></pageTitle>
    <ul class="works">
      <li>
        <a href="https://geekhubhack.herokuapp.com/">
          <img src="../../assets/geekhub.png">
          <div class="content">
            <h3>GEEK HUB</h3>
            <p class="detail">GEEK HUBは開発物を気軽に投稿できるサービスです。WebAPIの勉強のためにGitHub APIを使いたくて、このアプリを作成しました。</p>
            <p>Ruby on Rails, Bootstrap, GitHub API, Heroku</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://geekhubhack.herokuapp.com/">
          <img src="../../assets/geekhub.png">
          <div class="content">
            <h3>Portfolio</h3>
            <p class="detail">このポートフォリオサイトです。SPAやアニメーションを導入し、レスポンシブも頑張りました。フロントは初心者なのでいい勉強になりました。</p>
            <p>Vue.js, Netlify</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import pageTitle from '../modules/pageTitle'

export default {
  components: {
    pageTitle,
  },
}
</script>

<style scoped>

.works {
  margin: 0 auto 200px;
  width: 80%;
}

ul {
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
}

li {
  list-style: none;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  margin: 0 20px;
}

img {
  width: 100%;
  border-bottom: solid 1px #ccc;
}

.content {
  padding: 0 20px 20px;
}

.detail {
  text-align: left;
}

</style>