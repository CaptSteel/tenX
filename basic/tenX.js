var timeMinute = $('#timeMinute');
var timeSecond = $('#timeSecond');
var errorDiv = $('#error');

$(document).ready(function () {
  var minutes = 2;
  var seconds = 0;
  timeMinute.val(minutes);
  timeSecond.val(seconds);
});

$('#startTimer').click(function () {
  minutes = Number( timeMinute.val());
  seconds = Number(timeSecond.val());
  countDownValidate();
});

function countDownValidate() {
  if (minutes < 0) {
    errorDiv.html('Minute cannot be negative! Error');
    errorDiv.show();
    return;
  } else if (minutes > 60) {
    errorDiv.html('Minute cannot be greater than 60! Error');
    errorDiv.show();
    return;
  } else if (seconds < 0) {
    errorDiv.html('Seconds cannot be negative! Error');
    errorDiv.show();
    return;
  } else if (seconds > 60) {
    errorDiv.html('Second cannot be greater than 60! Error');
    errorDiv.show();
    return;
  }
  countDownTimer();
}

function countDownTimer() {
    var output = $('#output');
    errorDiv.html("");
    errorDiv.show();
    var totalSeconds = minutes * 60 + seconds;
    for (i=totalSeconds; i>=0; i--){
        output.val(i);
        console.log("Hi");
    }
}
