<template>
  <div class="coolMessagePage">
    <nav-Bar>Cool Message Page</nav-Bar>
    <a class="coolMessagePage-btn" href="javascript:void(0);" @click="messageAlertEvent">
      Message Alert Button
    </a>
    <a class="coolMessagePage-btn" href="javascript:void(0);" @click="messageConfirmEvent">
      Message Confirm Button
    </a>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'coolMessagePage',
  data() {
    return {
      env: '--------------COOL MESSAGE PAGE',
    };
  },
  components: {
    navBar,
  },
  methods: {
    messageAlertEvent() {
      this.$alert('支付成功', '恭喜你！你已经成为我们的VIP客户！至尊享受，让你流连忘返！', {
        confirmButtonText: 'OK',
        callback: () => {
          console.log(this.env);
          this.$alert('PAY SUCCESSFULLY FROM CALLBACK', 'You changed the this scope!', {
            confirmButtonText: 'TWICE BUTTON',
          });
        },
      });

      this.$alert('PAY SUCCESSFULLY TWICE', 'You changed the this scope!');
    },
    messageConfirmEvent() {
      this.$confirm('支付失败', '账户余额不足，请去充值分享币', {
        cancelButtonText: '不取消',
        confirmButtonText: '去充值',
        callback: (done) => {
          done();
          this.$alert('支付成功', '你已经成为我们的VIP客户', {
            confirmButtonText: '好的！',
          });
        },
      });
    },
  },
  created() {
    // this.messageAlertEvent();
    this.messageConfirmEvent();
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
