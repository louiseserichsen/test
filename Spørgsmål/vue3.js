new Vue({
    el: '#app',
    data() {
      return {
        selectedAnswer: ''
      };
    },
    methods: {
      goBack() {
        window.location.href = 'spørgsmål2.html';
      },
      goNext() {
        window.location.href = 'spørgsmål4.html';
      }
    }
  });