const PubSub = require('../pub_sub/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('words-typed', (event) => {
    const textInput = event.detail;
    const primeNumbers = this.numberIsPrime(textInput);
    console.log(primeNumbers);
    PubSub.publish('prime-numbers', primeNumbers);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return "not a prime number";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "not a prime number";
    }
  }
  return "a prime number";
};

module.exports = PrimeChecker;
