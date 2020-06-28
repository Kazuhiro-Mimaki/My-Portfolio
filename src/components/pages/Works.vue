<template>
  <div id="works">
    <pageTitle title="Works"></pageTitle>
    <ul>
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
        <a href="#">
          <img src="../../assets/portfolio.png">
          <div class="content">
            <h3>Portfolio</h3>
            <p class="detail">このポートフォリオサイトです。色・レイアウト共にシンプルさを意識しました。簡易ですが、JavaScript、Vue.jsのいい勉強になりました。</p>
            <p>JavaScript, Vue.js, Netlify</p>
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

#works {
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
  padding-top: 100px; /* 打ち消し用のパディング */
  margin-bottom: 200px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  width: 60%;
  margin: 0 auto;
}

li {
  list-style: none;
  text-align: center;
  border-radius: 5px;
  margin: 0 20px;
  transform-style: flat;
  transition: all 250ms ease-out;
  box-shadow: 0 2px 5px #ccc;
}

a {
  text-decoration: none;
}

p {
  color: black;
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

li:hover {
  box-shadow: 0 10px 15px rgba(31, 31, 31, 0.5);
}

</style>