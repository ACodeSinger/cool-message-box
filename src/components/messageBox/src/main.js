
import Vue from 'vue';
import msgBoxVue from './main.vue';

const MessageBoxConstructor = Vue.extend(msgBoxVue);

let instance;
const msgQueue = [];
const defaultConfig = {
  title: '',
  message: '',
  confirmButtonText: '知道了',
  confirmButtonTextColor: '',
  callback: null,
};

function initInstance() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div'),
  });
}

const showNextMsg = () => {
  if (!instance.visible) {
    if (msgQueue.length > 0) {
      const currentMsg = msgQueue.shift();
      Object.keys(currentMsg).forEach((prop) => {
        instance[prop] = currentMsg[prop];
      });

      const oldCb = instance.callback;
      instance.callback = () => {
        if (typeof oldCb === 'function') {
          oldCb();
        }
        showNextMsg();
      };
      document.body.appendChild(instance.$el);

      instance.visible = true;
    }
  }
};

const MessageBox = function MessageBox(options) {
  if (!instance) {
    initInstance();
  }
  const latestOptions = Object.assign({}, defaultConfig, options);
  msgQueue.push(latestOptions);
  showNextMsg();
};

MessageBox.alert = (title, message, others = {}) => {
  let options = MessageBox.alert.config || {};
  if (typeof title === 'object') {
    options = title;
  } else {
    options = Object.assign(options, {
      title,
      message,
    });
    if (JSON.stringify(others) !== '{}') {
      options = Object.assign({}, options, others);
    }
  }
  return MessageBox(options);
};

export default MessageBox;
