new Vue({
    el: '#app',
    data() {
      return {
        selectedAnswer: ''
      };
    },
    methods: {
      goBack() {
        window.location.href = 'https://www.google.dk/';
      },
      goNext() {
        window.location.href = 'spørgsmål2.html';
      }
    }
  });