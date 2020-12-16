<script>
import pageTitle from '@/components/atoms/SectionTitle/Component';

export default {
  components: {
    pageTitle,
  },
};
</script>

<template>
  <div id="works">
    <pageTitle title="Works"></pageTitle>
    <ul>
      <li>
        <a href="https://geekhubhack.herokuapp.com/">
          <img src="@/assets/geekhub.png" />
          <div class="content">
            <h3>GEEK HUB</h3>
            <p class="detail">
              GEEK HUBは開発物を気軽に投稿できるサービスです。WebAPIの勉強のためにGitHub
              APIを使いたくて、このアプリを作成しました。まだ不十分な部分はこれから実装していきます。
            </p>
            <p>Ruby on Rails, Bootstrap, GitHub API, Heroku</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://mk-portfolio-site.netlify.app/">
          <img src="@/assets/portfolio.png" />
          <div class="content">
            <h3>Portfolio</h3>
            <p class="detail">
              このポートフォリオサイトです。色・レイアウト共にシンプルさを意識し、レスポンシブ対応まで頑張りました。簡易ですが、JavaScript、Vue.jsのいい勉強になりました。
            </p>
            <p>JavaScript, Vue.js, Netlify</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#works {
  padding-top: 100px; /* 打ち消し用のパディング */
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
  margin-bottom: 200px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  padding-left: 0;
  margin: 0 auto;
}

li {
  margin: 0 20px;
  text-align: center;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  transition: all 250ms ease-out;
  transform-style: flat;
}

a {
  text-decoration: none;
}

p {
  color: rgb(50, 50, 50);
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

@media screen and (max-width: 480px) {
  #works {
    margin-bottom: 100px;
  }

  ul {
    display: initial;
    width: 60%;
  }

  li {
    margin-bottom: 50px;
  }

  p {
    font-size: 15px;
  }
}
</style>
