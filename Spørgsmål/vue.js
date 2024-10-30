new Vue({
    el: '#app',
    data() {
      return {
        selectedAnswer: ''
      };
    },
    methods: {
      goBack() {
        window.location.href = 'tidligere_side.html';
      },
      goNext() {
        window.location.href = 'https://www.google.dk/';
      }
    }
  });