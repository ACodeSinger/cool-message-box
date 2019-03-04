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
      // this.$alert('标题1', '内容1'); // 样例1

      // this.$alert({ // 样例2
      //   title: '标题2',
      //   message: '内容2',
      // });

      this.$alert('标题3', '内容3', {
        confirmButtonText: 'NO PROBLEM',
        confirmButtonTextColor: 'blue',
        cancel: () => {
          console.log('cancelCallback');
        },
        yes: (done) => {
          console.log(`alert callback: ${this.env}`);
          done();
        },
      });

      // this.$alert({
      //   title: '标题4',
      //   message: '内容4',
      //   confirmButtonText: 'OK',
      //   confirmButtonTextColor: 'blue',
      //   callback: (done) => {
      //     console.log('alert callback');
      //     this.$alert('支付成功', 'You are our VIP customer now!');
      //     done();
      //   },
      // });
    },
    messageConfirmEvent() {
      // this.$confirm('标题1', '内容1');
      // this.$confirm({
      //   title: '标题2',
      //   message: '内容2',
      // });

      this.$confirm('标题1', '内容1', {
        cancelButtonText: 'Cancel',
        cancelButtonTextColor: '#999',
        confirmButtonText: 'OK',
        confirmButtonTextColor: 'blue',
        cancel: (done) => {
          console.log('confirm cancel event');
          done();
        },
        yes: (done) => {
          console.log('confirm yes event');
          done();
        },
      });
      // this.$alert('标题1', '内容1', {
      //   confirmButtonText: 'NO PROBLEM',
      //   confirmButtonTextColor: 'blue',
      //   cancel: () => {
      //     console.log('cancelCallback');
      //   },
      //   yes: (done) => {
      //     console.log(`alert callback: ${this.env}`);
      //     done();
      //   },
      // });
    },
  },
  created() {
    // this.messageAlertEvent();
    // this.messageConfirmEvent();
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
