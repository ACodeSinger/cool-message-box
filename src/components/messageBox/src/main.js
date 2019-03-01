
import Vue from 'vue';
import msgBoxVue from './main.vue';

const MessageBoxConstructor = Vue.extend(msgBoxVue);

let instance;

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div'),
  });
};

const MessageBox = function (options) {
  if (!instance) {
    initInstance();
  }

  if (!instance.visible) {
    for (const prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }

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
export { MessageBox };
