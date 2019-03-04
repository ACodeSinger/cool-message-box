/**
 * @author [yaozl]
 * @email [yaozl@3vjia.com]
 * @create date 2019/3/1 14:09
 * @desc: [ 弹框组件 ]
*/
<template>
  <div class="messageBox" v-if="visible">
    <div class="messageBox-mask"></div>
    <div class="messageBox-wrap">
      <div class="messageBox-header">{{title}}</div>
      <div class="messageBox-body">{{message}}</div>
      <div class="messageBox-footer" v-if="type==='$alert'" @click="confirmEvent"
           :style="confirmButtonStyle">
        <span>{{confirmButtonText}}</span>
      </div>
      <div class="messageBox-footer" v-if="type==='$confirm'" :style="confirmButtonStyle">
        <span class="messageBox-footer__cancel" @click="cancelEvent">{{cancelButtonText}}</span>
        <span class="messageBox-footer__confirm" @click="confirmEvent">{{confirmButtonText}}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    cancelButtonText: {
      type: String,
      default: '取消',
    },
    confirmButtonText: {
      type: String,
      default: '知道了',
    },
    confirmButtonTextColor: {
      type: String,
    },
    callback: {
      type: Function,
    },
    type: { // 可能的值为：$alert, $confirm,
      type: String,
      default: '$alert',
    },
  },
  computed: {
    confirmButtonStyle() {
      const confirmButtonStyleConfig = {};
      if (this.confirmButtonTextColor) {
        confirmButtonStyleConfig.color = this.confirmButtonTextColor;
      }
      return confirmButtonStyleConfig;
    },
  },
  data() {
    return {
      visible: false,
      env: 'MESSAGE BOX COMPONENT----',
    };
  },
  methods: {
    hideDialog() {
      this.visible = false;
    },
    cancelEvent() {
      this.visible = false;
    },
    confirmEvent() {
      const hideDialogEvent = this.hideDialog;
      if (typeof this.callback === 'function') {
        this.$nextTick(() => {
          this.callback(hideDialogEvent);
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  $black-color: #000;
  $border-color: #E5E5E5;
  .messageBox {
    &-wrap {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 5000;
      width: 280px;
      border-radius: 10px;
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }
    &-header {
      margin-top: 25px;
      line-height: 25px;
      text-align: center;
      color: $black-color;
      font-size: 18px;
    }
    &-body {
      width: 100%;
      padding: 9px 35px 12px;
      font-size: 15px;
      color: #888;
      text-align: center;
      line-height: 24px;
    }
    &-footer {
      height: 54px;
      line-height: 54px;
      text-align: center;
      color: #B19663;
      font-size: 18px;
      border-top: 1px solid $border-color;
      &__cancel, &__confirm {
        display: inline-block;
        width: 50%;
      }
      &__cancel {
        color: $black-color;
        border-right: 1px solid $border-color;
      }
    }
    &-mask {
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
    }
  }
</style>
