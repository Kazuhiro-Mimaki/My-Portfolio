<template>
  <div id="top">
    <p class="introduce">
      <span>Welcome to my portfolio</span>
    </p>
  </div>
</template>

<style lang="scss">
#top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 100px;
  color: #fff;
  text-align: center;
  background: #2a4364;

  .introduce {
    position: relative;
    width: 100%;
    font-size: 40px;

    span {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      animation: fade-in 1s ease 3s forwards;
    }

    &::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background: color(light, base);
      animation: left-to-right 2s ease 1s forwards;
    }
  }
}

@media screen and (max-width: 480px) {
  #top {
    margin-bottom: 0;

    .introduce {
      font-size: 24px;
    }
  }
}

@keyframes left-to-right {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
