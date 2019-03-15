<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  mounted() {
    console.log(process.env.NODE_ENV);
  },
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
