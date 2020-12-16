<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.title {
  width: 50%;
  margin: 0 auto 50px;
  font-size: 40px;
  text-align: center;
  border-bottom: solid 2px #555;
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 30px;
  }
}
</style>
