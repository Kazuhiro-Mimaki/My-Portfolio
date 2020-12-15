<template>
  <div id="top">
    <vue-typer
      :text="['Hello.\nMy name is Kazuhiro Mimaki.', 'Welcome to my portfolio site.']"
      class="top-text"
      :repeat="0"
      :preTypeDelay="1000"
      :typeDelay="100"
      :preEraseDelay="500"
      :eraseDelay="500"
    ></vue-typer>
  </div>
</template>

<style scoped>
#top {
  background: linear-gradient(-130deg, #edfc8a, #96a2fc);
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

@media screen and (max-width: 480px) {
  #top {
    margin-bottom: 0;
  }

  .top-text {
    font-size: 20px;
  }
}
</style>
