const PubSub = require('../pub_sub/pub_sub.js');


const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('prime-numbers', (event) => {
    const primeNumbers = event.detail;
    this.displayResult( primeNumbers );
  });

};

ResultView.prototype.displayResult = function (primeNumbers) {

  const result = document.querySelector('#result');
  result.textContent = `The number you guessed is ${primeNumbers}`;
};

module.exports = ResultView;
