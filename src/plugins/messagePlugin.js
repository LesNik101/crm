export default {
  install: (app) => {
    app.config.globalProperties.$Message = (message) => {
      window.M.toast({ html: message });
    };
  },
};
