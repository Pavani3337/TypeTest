const paragraphs = [

`Technology is evolving rapidly and developers must continuously improve their programming skills to build innovative applications.`,

`Success in software engineering requires consistent practice logical thinking and strong problem solving abilities.`,

`Frontend development combines creativity and programming to create beautiful and interactive user experiences.`,

`Real world applications use databases APIs authentication systems and responsive interfaces to solve practical problems.`,

`Programming becomes easier with patience daily practice debugging skills and continuous learning from projects.`,

`Web development allows creators to build useful platforms that people can access from anywhere in the world.`,

`JavaScript is one of the most powerful programming languages used for creating dynamic and interactive websites.`,

`Learning programming step by step through projects helps students understand concepts more effectively.`,

`Developers use problem solving skills every day while creating applications and fixing software bugs.`,

`Modern applications focus on speed security responsiveness and user friendly interfaces.`,

`Typing speed improves gradually through regular practice and concentration on accuracy.`,

`Software projects become successful when planning design coding and testing are done carefully.`,

`Database systems help applications store organize retrieve and manage large amounts of information efficiently.`,

`Creativity and logic together help developers build impressive real world applications.`,

`Consistent learning is the most important habit for becoming a successful software engineer.`,

`Responsive websites automatically adjust their layouts according to different screen sizes.`,

`Technology continues to transform communication education healthcare and entertainment industries.`,

`Real world coding projects help students gain confidence and practical development experience.`,

`Programming languages provide instructions that computers follow to perform specific tasks.`,

`Debugging is an important skill that helps developers identify and fix errors in applications.`,

`Cloud computing allows users to access applications and data through the internet.`,

`Good user interface design improves the overall experience of using a website or application.`,

`Applications become more useful when they solve practical daily life problems for users.`,

`GitHub helps developers manage projects collaborate with teams and deploy websites online.`,

`Artificial intelligence is influencing many modern technologies and software systems today.`,

`Web applications combine frontend backend databases APIs and authentication systems together.`,

`Developers improve their skills faster by building projects instead of only reading theory.`,

`Software engineering requires patience dedication creativity and continuous improvement.`,

`Typing tests help users measure their speed accuracy and keyboard efficiency.`,

`Real time applications process user interactions immediately without noticeable delay.`,

`Programming projects teach logical thinking analytical skills and structured problem solving.`,

`Developers often use APIs to connect applications with external services and platforms.`,

`User friendly applications focus on simplicity clarity and smooth interactions.`,

`Practice and experimentation are essential parts of mastering web development skills.`,

`Technology driven solutions are helping businesses automate tasks and improve productivity.`,

`Coding becomes enjoyable when developers create applications that people genuinely use.`,

`Frontend developers design layouts animations forms and interactive website elements.`,

`Applications should be tested properly to ensure stability reliability and performance.`,

`Learning by building projects creates stronger understanding than memorizing concepts.`,

`Modern websites use responsive layouts to support desktops tablets and mobile devices.`,

`Programming teaches discipline logical thinking and systematic approaches to solving problems.`,

`Web technologies continue evolving rapidly introducing new tools frameworks and techniques.`,

`Students gain confidence when they successfully deploy their own websites online.`,

`Software applications become valuable when they provide meaningful real world functionality.`,

`Building projects regularly helps beginners transition into professional developers gradually.`,

`Designing attractive interfaces improves user engagement and overall application quality.`,

`Developers often work with databases to manage users products transactions and records.`,

`Technology enables people around the world to communicate collaborate and learn instantly.`,

`Every successful application starts with a simple idea followed by consistent development.`,

`Strong programming foundations make learning advanced technologies much easier later.`

];

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

function loadRandomParagraph() {

    const randomIndex =
    Math.floor(
        Math.random() * paragraphs.length
    );

    currentParagraph =
    paragraphs[randomIndex];

    textDisplay.innerText =
    currentParagraph;

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