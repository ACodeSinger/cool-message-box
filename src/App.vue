<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
};
</script>

<style>
  @import "assets/scss/reset.scss";
  @import "assets/scss/base.scss";
#app {
  width: 100%;
  height: 100%;
}
</style>
