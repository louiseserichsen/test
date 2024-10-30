new Vue({
    el: '#app',
    data() {
      return {
        selectedAnswer: ''
      };
    },
    methods: {
      goBack() {
        window.location.href = 'spørgsmål1.html';
      },
      goNext() {
        window.location.href = 'spørgsmål3.html';
      }
    }
  });