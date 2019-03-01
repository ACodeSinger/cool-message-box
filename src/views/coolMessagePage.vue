<template>
  <div class="coolMessagePage">
    <nav-Bar>Cool Message Page</nav-Bar>
    <a class="coolMessagePage-btn" href="javascript:void(0);" @click="messageEvent">
      Message Alert Button
    </a>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'coolMessagePage',
  components: {
    navBar,
  },
  methods: {
    messageEvent() {
      this.$alert('支付成功', '恭喜你！你已经成为我们的VIP客户！至尊享受，让你流连忘返！', {
      });
      // this.$alert('支付失败', '丑拒！');
    },
  },
};
</script>

<style scoped lang="scss">
.coolMessagePage {
  &-btn {
    display: block;
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background-color: #e5e5e5;
    border: 0;
    margin: 5px 0 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    &:active {
      box-shadow: 0 0 0;
    }
  }
}
</style>
