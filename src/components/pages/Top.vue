<template>
  <div class="top">
    <vue-typer :text="['Hello.\nMy name is Kazuhiro Mimaki.\n Welcome to my portfolio site.']" class="top-text" :repeat='0'
    :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer>
  </div>
</template>

<style scoped>

.top {
  background-color:#03111a;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  margin-bottom: 200px;
}

.top-text {
  font-size: 40px;
  margin-top: 300px;
}

</style>