  Vue.config.devtools = true;
  Vue.prototype.window = window;

  const app = new Vue({
      el: '#app',
      data() {},
      methods: {},

      mounted() {
          if ('alt' in window) {
              // alt.on('auth:Error', this.setError);
              alt.emit('auth:Ready');
          } else {
              // this.setReady();
          }
      }
  });