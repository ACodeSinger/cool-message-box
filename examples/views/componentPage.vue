<template>
  <div class="componentPage">
    <router-link href="" to="/coolMessagePage" class="componentPage-btn">
      <span>Go to coolMessagePage</span>
    </router-link>
    <router-link href="" to="/noFound" class="componentPage-btn">
      <span>Go to noFound</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'componentPage',
};
</script>

<style scoped lang="scss">
  .componentPage {
    width: 100%;
    height: 100%;
    background-color: #ddd;
    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 36px;
      text-align: center;
      background-color: #fff;
      margin-bottom: 10px;
      box-shadow: 5px 5px 5px #ccc;
    }
  }
</style>
