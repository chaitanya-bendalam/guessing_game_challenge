  "use strict"

  var randomString = Math.floor((Math.random() * 10) + 1);
  var maxTries = 3;

  function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }

  function minMaxNumberCheck(e) {
    var inputId = document.getElementById(e.id);
    var inputValue = Number(inputId.value);
    if (inputValue == 0 || inputValue > 10)
      inputId.value = (inputValue == 0) ? '' : (inputValue.toString())[0];
    return true;
  }
  document.getElementById('guessit').onclick = function() {
    var inputId = document.getElementById('guess_value');
    var inputValue = Number(inputId.value);
    document.getElementById('optText').innerHTML = '';
    if (inputValue > 0 && inputValue < 11 && maxTries > 0) {
      var optStatement = '';
      var noOfTries = (maxTries == 3) ? 'first' : ((maxTries == 2) ? 'second' : (maxTries == 1) ? 'last' : '');
      var interval = Number(findIntervalLength([inputValue, randomString]));
      if (interval == 0)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + inputValue + '<br/>Right! You have won the game';
      else if (interval >= 3)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + inputValue + ' (cold)';
      else if (interval >= 2)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + inputValue + ' (warm)';
      else if (interval >= 1)
        optStatement = 'Your ' + noOfTries + ' guess is: ' + inputValue + ' (hot)';
      maxTries--;
      document.getElementById('optText').innerHTML = optStatement;
    }
  }

  function findIntervalLength(arr) {
    var count = 0;
    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);
    for (var i = lower; i < upper; i++) {
      count++;
    }
    return count;
  }
