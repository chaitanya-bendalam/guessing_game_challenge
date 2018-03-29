"use strict"

//Defining Business Logic
const randomString = Math.floor((Math.random() * 10) + 1);
var maxTries = 3; // No of Tries

module.exports.printGuessItOutput = function(request, reply) {
  const input = request.params.id;
  if (input > 0 && input < 11) {
    var optStatement = '';
    if (maxTries > 0) {
      const noOfTries = (maxTries == 3) ? 'first' : ((maxTries == 2) ? 'second' :
        (maxTries == 1) ? 'last' : '');
      const interval = Number(findIntervalLength([input, randomString]));
      if (interval == 0)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + input +
        '<br/>Right! You have won the game';
      else if (interval >= 3)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + input + ' (cold)';
      else if (interval >= 2)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + input + ' (warm)';
      else if (interval >= 1)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + input + ' (hot)';
      maxTries--;
    } else {
      optStatement = 'Your Max Tries done.';
    }
    reply(optStatement);
  } else {
    reply('Invalid input');
  }
};
const findIntervalLength = (arr) => {
  var count = 0;
  const lower = Math.min(arr[0], arr[1]);
  const upper = Math.max(arr[0], arr[1]);
  for (var i = lower; i < upper; i++) {
    count++;
  }
  return count;
};
