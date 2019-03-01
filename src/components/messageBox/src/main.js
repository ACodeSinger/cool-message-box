
import Vue from 'vue';
import msgBoxVue from './main.vue';

const MessageBoxConstructor = Vue.extend(msgBoxVue);

let instance;

function initInstance() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div'),
  });
}

const MessageBox = function MessageBox(options) {
  if (!instance) {
    initInstance();
  }

  if (!instance.visible) {
    Object.keys(options).forEach((prop) => {
      instance[prop] = options[prop];
    });

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
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
      options = Object.assign(options, others);
    }
  }
  return MessageBox(options);
};

export default MessageBox;
