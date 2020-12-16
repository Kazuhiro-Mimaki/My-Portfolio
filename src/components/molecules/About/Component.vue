<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    Section: require('@/components/atoms/Section/Component.vue').default,
    SectionTitle: require('@/components/atoms/SectionTitle/Component.vue').default,
    Icon: require('@/components/atoms/Icon/Component.vue').default,
    ListItem: require('@/components/atoms/ListItem/Component.vue').default,
  },
  setup: () => {
    const subjects = [
      {
        key: 'Name',
        value: 'Kazuhiro Mimaki',
      },
      {
        key: 'Age',
        value: '22',
      },
      {
        key: 'University',
        value: 'Kyoto University (Faculty of Economics)\n2017.04 - 2021.03',
      },
      {
        key: 'Grade',
        value: '大学の勉強は死なない程度にやってました。就活は終わっていて、来年からは東京でエンジニアとして働きます。',
      },
      {
        key: 'About me',
        value:
          "I've studied programming & engineering for about half a year. I can little things about programming, so I will study more and more. I enjoy programming and I love it!",
      },
    ];

    return {
      subjects,
    };
  },
});
</script>

<template>
  <Section id="about">
    <SectionTitle title="About" />
    <div :class="$style.items">
      <div :class="$style.portfolio_images">
        <img :class="$style.my_img" src="./images/portfolio.jpg" />
        <ul :class="$style.sns_images">
          <li>
            <Icon href="https://twitter.com/b1essk" :src="require('./images/sns/twitter.png')" />
          </li>
          <li>
            <Icon href="https://github.com/Kazuhiro-Mimaki" :src="require('./images/sns/github.png')" />
          </li>
          <li>
            <Icon href="https://qiita.com/Kazuhiro_Mimaki" :src="require('./images/sns/qiita.png')" />
          </li>
        </ul>
      </div>
      <ul :class="$style.content">
        <li v-for="(subject, index) in subjects" :key="index">
          <ListItem :item="subject.key" :content="subject.value" />
        </li>
      </ul>
    </div>
  </Section>
</template>

<style lang="scss" module>
.items {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto 100px;
  color: rgb(50, 50, 50);

  .content {
    width: 80%;
    padding-left: 0;

    li {
      margin-bottom: 20px;
      list-style: none;
    }
  }

  .portfolio_images {
    text-align: center;

    .my_img {
      display: block;
      width: 80%;
      margin: 0 auto;
      border-radius: 100%;
    }

    .sns_images {
      display: flex;
      justify-content: center;
      padding-left: 0;
      margin-top: 50px;

      li {
        list-style: none;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .items {
    display: initial;

    .portfolio-images {
      margin-bottom: 50px;
    }

    .content {
      width: 100%;
    }
  }
}
</style>
