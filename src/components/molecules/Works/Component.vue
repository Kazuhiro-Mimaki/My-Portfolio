<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    Section: require('@/components/atoms/Section/Component.vue').default,
    SectionTitle: require('@/components/atoms/SectionTitle/Component.vue').default,
    Card: require('@/components/atoms/Card/Component.vue').default,
  },
  setup: () => {
    const works = [
      {
        src: require('./images/geekhub.png'),
        href: 'https://geekhubhack.herokuapp.com/',
        title: 'GEEK HUB',
        detail:
          'GEEK HUBは開発物を気軽に投稿できるサービスです。WebAPIの勉強のためにGitHubAPIを使いたくて, このアプリを作成しました。まだ不十分な部分はこれから実装していきます。',
        languages: 'Ruby on Rails, Bootstrap, GitHub API, Heroku',
      },
      {
        src: require('./images/portfolio.png'),
        href: 'https://mk-portfolio-site.netlify.app/',
        title: 'Portfolio',
        detail:
          'このポートフォリオサイトです。色・レイアウト共にシンプルさを意識し, レスポンシブ対応まで頑張りました。簡易ですが, JavaScript, Vue.jsのいい勉強になりました。',
        languages: 'JavaScript, TypeScript, Vue.js, Netlify',
      },
      {
        src: require('./images/blog.png'),
        href: 'https://b1essk.com/',
        title: 'Blog',
        detail:
          '技術ブログです。Hugoの"Zzo"というテーマを使っています。tcardgenでOGPを自動生成できるようにし, ビルド&デプロイはGitHub Actionsで自動化しました。',
        languages: 'Hugo(Zzo), firebase(hosting)',
      },
      {
        src: require('./images/buzzrita.png'),
        href: 'https://twitter.com/buzzrita/',
        title: 'Buzzrita',
        detail:
          '"エンジニア"や"プログラミング"といったキーワードに紐づくLGTM数の多いQiitaの記事を毎日2回呟いてくれるTwitterボットです。データはスクレイピングで取得し, Herokuのtime schedulerを利用してプログラムを定期実行しています。',
        languages: 'Python, Twitter API, heroku',
      },
    ];

    return { works };
  },
});
</script>

<template>
  <Section :class="$style.component" id="works">
    <SectionTitle title="Works" />
    <div :class="$style.cards">
      <Card
        :class="$style.card"
        v-for="(work, i) in works"
        :key="i"
        :src="work.src"
        :href="work.href"
        :title="work.title"
        :detail="work.detail"
        :languages="work.languages"
      />
    </div>
  </Section>
</template>

<style lang="scss" module>
.component {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;

    .card {
      width: 100%;
      margin: 10px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 2px 5px #ccc;
      transition: all 250ms ease-out;
      transform-style: flat;

      &:hover {
        box-shadow: 0 10px 15px rgba(31, 31, 31, 0.5);
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .component {
    .cards {
      .card {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
