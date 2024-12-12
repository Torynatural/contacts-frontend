<template>
  <div id="app">
    <header>
      <h1>通讯录管理系统</h1>
      <nav>
        <router-link to="/">通讯录列表</router-link> |
        <router-link to="/add">添加新记录</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// 使用<script setup>的Vue 3语法，无需额外逻辑时可留空。
// 如果需要全局数据或状态，可在这里引入或使用Pinia/Vuex。
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f9f9f9;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  background: #0366d6;
  color: #fff;
  padding: 1rem;
}
header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
main {
  flex: 1;
  padding: 1rem;
}
</style>
