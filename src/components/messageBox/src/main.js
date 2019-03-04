
import Vue from 'vue';
import msgBoxVue from './main.vue';

const MessageBoxConstructor = Vue.extend(msgBoxVue);

let instance;
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

const MessageBox = function MessageBox(options) {
  if (!instance) {
    initInstance();
  }

  const latestOptions = Object.assign({}, defaultConfig, options);
  if (!instance.visible) {
    Object.keys(latestOptions).forEach((prop) => {
      instance[prop] = latestOptions[prop];
    });

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
    // showNextMsg();
  }
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
