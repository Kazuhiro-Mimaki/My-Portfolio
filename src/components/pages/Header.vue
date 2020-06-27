<template>
  <header>
    <div class="header">
      <h1 class="title">Kazuhiro's Portfolio</h1>
      <ul>
        <!-- @clickイベントでrouter必要 -->
        <li><a href="#">Top</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

header {
  box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.1);
  top: 0;
  position: sticky;
  background-color: #fff;
  /* position: fixed; */
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 64px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin-left: 40px;
}

li:hover {
  cursor: pointer;
}

</style>