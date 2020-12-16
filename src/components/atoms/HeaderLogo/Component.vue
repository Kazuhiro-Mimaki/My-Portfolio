<template>
  <h1 :class="$style.title">Portfolio</h1>
</template>

<style lang="scss" module>
.title {
  color: color(dark, primary);
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 25px;
  }
}
</style>
