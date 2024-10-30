new Vue({
    el: '#app',
    data() {
      return {
        selectedAnswer: ''
      };
    },
    methods: {
      goBack() {
        window.location.href = 'spørgsmål4.html';
      },
      goNext() {
        window.location.href = 'hspørgsmå1.html';
      }
    }
  });