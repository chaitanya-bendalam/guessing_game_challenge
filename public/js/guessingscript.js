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
  $('#guessit').on('click', function() {
    var inputValue = Number($('#guess_value').val());
    $('#optText').html('');
    $.get( 'http://127.0.0.1:3000/guessit/'+inputValue, function( data ) {
      $('#optText').html( data );
    })
  })
  $(document).ready(function() {
    $.get( 'http://127.0.0.1:3000/guessit/reloadgame/', function( data ) {
        console.log(data);
    })
  })
