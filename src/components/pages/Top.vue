<template>
  <div id="top">
    <vue-typer :text="['Hello.\nMy name is Kazuhiro Mimaki.\n Welcome to my portfolio site.']" class="top-text" :repeat='0'
    :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer>
  </div>
</template>

<style scoped>

#top {
  background: linear-gradient(-130deg, #59CDFF, #F58D00);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  margin-bottom: 100px;
}

.top-text {
  font-size: 40px;
  margin-top: 300px;
}

</style>