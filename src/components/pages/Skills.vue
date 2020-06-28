<template>
  <div id="skills">
    <pageTitle title="Skills"></pageTitle>
    <div class="items">
      <p class="sub-title">インターンの実務経験などはありません。気の向くままに個人開発や勉強をしています。</p>
      <ul>
        <li v-for="(language, index) in languages" :key="index" v-on:mouseover="mouseOverAction(index)" v-on:mouseleave="mouseLeaveAction(index)">
          <img v-bind:src="language.url">
          <h5>{{ language.name }}</h5>
          <p v-if="isHover && isIndex === index" class="detail">{{ language.detail }}</p>
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
      isHover: false,
      isIndex: '',
      languages: [
        { url: 'https://cdn.svgporn.com/logos/html-5.svg', name: 'HTML', detail: 'セマンティクスとツリー構造を意識した基本的なレイアウトが書けます。' },
        { url: 'https://cdn.svgporn.com/logos/css-3.svg', name: 'CSS', detail: '基本的なデザインが書けます。\nレスポンシブ可。' },
        { url: 'https://cdn.svgporn.com/logos/ruby.svg', name: 'Ruby', detail: '一番最初に触れた言語です。\nポーカーの役判定アプリやジャンケンゲームを作って遊んだりしてました。' },
        { url: 'https://cdn.svgporn.com/logos/rails.svg', name: 'Ruby on Rails', detail: '今のところ最も触っているフレームワークです。簡単なWebアプリケーションやLINEBotを作成しました。' },
        { url: 'https://cdn.svgporn.com/logos/javascript.svg', name: 'JavaScript', detail: '最近勉強し始めた言語です。TypeScriptも勉強しており、これから制作物を作ろうと思っています。' },
        { url: 'https://cdn.svgporn.com/logos/vue.svg', name: 'Vue.js', detail: 'このポートフォリオサイトを作るために勉強しました。Vue.js便利すぎて驚いてます。' },
        { url: 'https://cdn.svgporn.com/logos/c-plusplus.svg', name: 'C++', detail: '1ヶ月ほど競技プログラミングの勉強をしていた時に使っていました。A・B問題は解ける、Cは解けるor解けないくらいのレベルです。高校数学の素養だけに任せて解いてきたので、しっかりアルゴリズムの勉強もしていきたいです。' },
        { url: 'https://cdn.svgporn.com/logos/github-icon.svg', name: 'GitHub', detail: 'master/develop/featureブランチを切って作業、issueを立てる、くらいの基本操作ならできます。' },
      ]
    }
  },
  methods: {
    mouseOverAction(index) {
      this.isHover = true;
      this.isIndex = index;
    },
    mouseLeaveAction() {
      this.isHover = false;
    },
  }
}

</script>

<style scoped>

#skills {
  margin-top: -50px; /* 固定ナビの高さ分のネガティブマージン */
  padding-top: 100px; /* 打ち消し用のパディング */
  margin-bottom: 100px;
}

.items {
  width: 70%;
  margin: 0 auto;
}

.sub-title {
  text-align: center;
  margin-bottom: 50px;
}

img {
  height: 50px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: top;
  padding-left: 0;
}

li {
  list-style: none;
  text-align: center;
  width: 25%;
  padding-top: 10px;
  /* padding: 20px; */
  filter: grayscale(100%);
}

li:hover {
  cursor: pointer;
  /* box-shadow: 0 2px 5px #ccc; */
  filter: grayscale(0);
}

.detail {
  /* text-align: left; */
  font-size: 14px;
}

p {
  white-space: pre-wrap
}
</style>