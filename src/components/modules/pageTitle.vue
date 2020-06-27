<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: ["title"],
}
</script>

<style scoped>
.title {
  text-align: center;
  border-bottom: solid 2px #555;
  width: 50%;
  margin: 0 auto 50px;
  font-size: 50px;
}

</style>