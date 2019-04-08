const PubSub = require('../pub_sub/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const textInput = event.target.number.value;
    PubSub.publish('words-typed', textInput);
  });

  PubSub.subscribe('prime-numbers', (event) => {
    form.reset(event);
  })

};

module.exports = FormView;
