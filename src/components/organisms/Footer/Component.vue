<template>
  <footer>
    <div class="footer">&copy;All right reserved by Kazuhiro Mimmaki</div>
  </footer>
</template>

<style lang="scss" module>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: white;
  background-color: color(dark, primary);
}

@media screen and (max-width: 480px) {
  footer {
    font-size: 13px;
  }
}
</style>
