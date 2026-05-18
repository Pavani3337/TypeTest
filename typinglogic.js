const sampleText =

`Technology is evolving rapidly and developers
must continuously improve their programming,
problem solving and logical thinking skills
to build innovative real world applications.`;

const textDisplay =
document.getElementById("textDisplay");

const typingInput =
document.getElementById("typingInput");

const timeValue =
document.getElementById("timeValue");

const wpmValue =
document.getElementById("wpmValue");

const accuracyValue =
document.getElementById("accuracyValue");

textDisplay.innerText = sampleText;

let timer = 60;

let started = false;

let interval;

typingInput.addEventListener("input", () => {

    if (!started) {

        startTimer();

        started = true;

    }

    calculateResults();

});

function startTimer() {

    interval = setInterval(() => {

        timer--;

        timeValue.innerText = timer;

        if (timer <= 0) {

            clearInterval(interval);

            typingInput.disabled = true;

        }

    }, 1000);

}

function calculateResults() {

    const typedText =
    typingInput.value;

    const wordsTyped =
    typedText.trim().split(/\s+/).length;

    wpmValue.innerText =
    wordsTyped;

    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {

        if (typedText[i] === sampleText[i]) {

            correctCharacters++;

        }

    }

    const accuracy =
    Math.floor(
        (correctCharacters / typedText.length) * 100
    ) || 0;

    accuracyValue.innerText =
    accuracy;

}

function restartTest() {

    clearInterval(interval);

    timer = 60;

    started = false;

    typingInput.disabled = false;

    typingInput.value = "";

    timeValue.innerText = 60;

    wpmValue.innerText = 0;

    accuracyValue.innerText = 100;

}