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
    padding: 10px 20px;
    margin: 0 40px;
    list-style: none;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.3);
    }

    a {
      color: color(dark, base);
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
