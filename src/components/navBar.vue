<template>
  <div class="navBar">
    <i class="navBar-backBtn" @click="goBack">&lt;</i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.navBar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  &-backBtn{
    position: absolute;
    left: 5px;
    font-size: 24px;
    color: #fff;
  }
}
</style>
