<template>
  <ul :class="$style.header_nav">
    <li :class="$style.nav_list"><a href="#top">Top</a></li>
    <li :class="$style.nav_list"><a href="#about">About</a></li>
    <li :class="$style.nav_list"><a href="#skills">Skills</a></li>
    <li :class="$style.nav_list"><a href="#works">Works</a></li>
  </ul>
</template>

<style lang="scss" module>
.header_nav {
  display: flex;
  padding-left: 0;

  .nav_list {
    margin: 0 40px;
    list-style: none;

    &:hover {
      cursor: pointer;
      border-bottom: solid 1px #000;
    }

    a {
      color: color(dark, primary);
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .header_nav {
    .nav_list {
      margin: 0 10px;
    }
  }
}
</style>
