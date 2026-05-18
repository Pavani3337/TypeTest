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

let currentParagraph = "";

let timer = 60;

let started = false;

let interval;

async function loadRandomParagraph() {

    try {

        const response =
        await fetch(
        "https://api.quotable.io/random"
        );

        const data =
        await response.json();

        currentParagraph =
        data.content;

        textDisplay.innerText =
        currentParagraph;

    }

    catch (error) {

        currentParagraph =
        "Typing test failed to load text.";

        textDisplay.innerText =
        currentParagraph;

    }

}

loadRandomParagraph();

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

        if (typedText[i] === currentParagraph[i]) {

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

    loadRandomParagraph();

}