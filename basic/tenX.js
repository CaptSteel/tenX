const timeInput = document.getElementById('time');
const timeSpeedInput = document.getElementById('timeSpeed');
const checkBox = document.getElementById('checkBox');
const output = document.getElementById('output');
let intervalId;

function updateOutput() {
    clearInterval(intervalId);

    const timeValue = timeInput.value;
    const speedValue = parseFloat(timeSpeedInput.value);
    const customSpeedEnabled = checkBox.checked;

    const [minutes, seconds] = timeValue.split(':').map(value => parseInt(value));

    if (!isNaN(minutes) && !isNaN(seconds)) {
        let timeInSeconds = minutes * 60 + seconds;

        if (customSpeedEnabled && !isNaN(speedValue)) {
            intervalId = setInterval(() => {
                const remainingTime = getTimeStringFromSeconds(timeInSeconds);
                output.value = `Countdown: ${remainingTime}`;
                timeInSeconds -= speedValue;
                if (timeInSeconds < 0) {
                    clearInterval(intervalId);
                    output.value = 'Time is up!';
                }
            }, 1000);
        } else {
            intervalId = setInterval(() => {
                const remainingTime = getTimeStringFromSeconds(timeInSeconds);
                output.value = `Countdown: ${remainingTime}`;
                timeInSeconds -= 1;
                if (timeInSeconds < 0) {
                    clearInterval(intervalId);
                    output.value = 'Time is up!';
                }
            }, 1000);
        }
    } else {
        output.value = 'Invalid time format';
    }
}

function getTimeStringFromSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

timeInput.addEventListener('input', updateOutput);
timeSpeedInput.addEventListener('input', updateOutput);
checkBox.addEventListener('change', updateOutput);
