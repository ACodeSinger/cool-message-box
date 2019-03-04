
import Vue from 'vue';
import msgBoxVue from './main.vue';

const MessageBoxConstructor = Vue.extend(msgBoxVue);

let instance;
const msgQueue = [];
const defaultConfig = {
  title: '',
  message: '',
  cancelButtonText: '取消',
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
      instance.callback = (done) => {
        if (typeof oldCb === 'function') {
          oldCb(done);
        } else {
          done();
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
  let options;
  if (typeof title === 'object') {
    options = title;
  } else {
    options = {
      title,
      message,
    };
    if (JSON.stringify(others) !== '{}') {
      options = Object.assign({}, options, others);
    }
  }

  options = Object.assign({}, MessageBox.alert.config, options, {
    type: '$alert',
  });
  return MessageBox(options);
};

MessageBox.confirm = (title, message, others = {}) => {
  let options;
  if (typeof title === 'object') {
    options = title;
  } else {
    options = {
      title,
      message,
    };
    if (JSON.stringify(others) !== '{}') {
      options = Object.assign({}, options, others);
    }
  }
  options = Object.assign({}, MessageBox.confirm.config, options, {
    type: '$confirm',
  });
  return MessageBox(options);
};

export default MessageBox;
