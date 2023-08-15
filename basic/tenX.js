const timeMinute = $('#timeMinute');
const timeSecond = $('#timeSecond');
const errorDiv = $('#error');

$(document).ready(function () {
  var minutes = 0;
  var seconds = 5;
  timeMinute.val(minutes);
  timeSecond.val(seconds);
});

$('#startTimer').click(function () {
  minutes = parseInt(timeMinute.val());
  seconds = parseInt(timeSecond.val());
  countDownValidate();
});

function countDownValidate() {
    let errorMsgs = {
      noError: '',
      Error: 'Invalid Input',
    };

  if (minutes < 0 || seconds < 0 || minutes > 60 || seconds > 60) {
    errorDiv.html(errorMsgs.Error);
    errorDiv.show();
    return;
  } else {
    // remove error msg if any
    errorDiv.html('');
    errorDiv.hide();
    countDownTimer();
  }
}

function countDownTimer() {
  // calc
  let totalSeconds = minutes * 60 + seconds;
  let counter = totalSeconds;
  let interval;

  interval = setInterval(() => {
    let speedUpFactor = parseInt($('#speedUpFactor').val());
    if ($('#applyTenX').is(':checked') && !isNaN(speedUpFactor)) {
      // speedUpFactor checkbox
      counter -= speedUpFactor;
    } else {
      counter--;
    }
    if (counter < 0) {
      clearInterval(interval);
      return;
    }
    $('#output').val(counter); // update Timer display
  }, 1000);
}
