import MessageBox from './messageBox/main';

export default MessageBox;
// const install = (Vue, options) => {
//   let alertVal = '$alert';
//   if (options.alertConfig) {
//     if (options.alertConfig.value) {
//       alertVal = options.alertConfig.value;
//     }
//   }
//   let confirmVal = '$confirm';
//   if (options.confirmConfig) {
//     if (options.confirmConfig.value) {
//       confirmVal = options.confirmConfig.value;
//     }
//   }
//   Vue.prototype[alertVal] = MessageBox.alert;
//   Vue.prototype[alertVal].config = options.alertConfig || {};
//   Vue.prototype[confirmVal] = MessageBox.confirm;
//   Vue.prototype[confirmVal].config = options.confirmConfig || {};
// };
//
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }
//
// // export default MessageBox;
// export default {
//   install,
// };
