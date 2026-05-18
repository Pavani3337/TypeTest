const paragraphs = [

`Technology is transforming the modern world rapidly and developers must continuously improve their programming knowledge and practical problem solving abilities. Building projects regularly helps students understand concepts more clearly and prepares them for real world software development careers.`,

`Frontend development combines creativity logic and user experience design to build interactive websites and modern web applications. Developers use HTML CSS and JavaScript together to create responsive platforms that work smoothly across different devices and screen sizes.`,

`Software engineering requires patience consistency and analytical thinking to design useful applications that solve practical problems efficiently. Developers often spend time debugging optimizing and improving systems to provide better performance and user satisfaction.`,

`Typing speed and accuracy improve gradually through continuous practice concentration and discipline during regular sessions. Professional typing applications usually provide random paragraphs timers and performance tracking systems to help users monitor their progress effectively.`,

`Modern applications rely heavily on databases APIs authentication systems and responsive interfaces to provide smooth user experiences. Full stack developers combine frontend backend and database technologies together to create complete real world software solutions.`,

`GitHub has become one of the most important platforms for developers to manage projects collaborate with teams and deploy applications online. Learning version control systems helps students understand professional development workflows and software project management.`,

`Programming is not only about writing code but also about solving problems using logical and structured approaches effectively. Developers improve their skills significantly when they focus on project based learning instead of only studying theoretical concepts.`,

`Responsive web design allows websites to automatically adjust layouts images and interface elements according to different screen sizes. This approach ensures that users receive a consistent and comfortable browsing experience across mobile tablet and desktop devices.`,

`Technology driven solutions are improving communication education healthcare transportation and entertainment industries across the world today. Software applications continue evolving rapidly as developers introduce innovative features and smarter digital experiences for users everywhere.`,

`Real world software projects often require careful planning database design testing deployment and maintenance throughout development cycles. Building practical applications helps students gain confidence and understand how professional systems are developed and managed.`,

`JavaScript is one of the most powerful programming languages used for building dynamic interactive and responsive web applications today. Developers use JavaScript for animations validations APIs and handling user interactions within modern websites efficiently.`,

`Learning web development step by step through practical projects helps beginners understand frontend backend and database concepts naturally. Small projects such as calculators typing tests and QR generators create strong foundations for advanced applications later.`,

`Cloud computing allows businesses and individuals to store manage and access data through internet based platforms securely. Modern applications frequently depend on cloud services for hosting storage scalability and online accessibility from different locations.`,

`Developers often use APIs to connect applications with external platforms services and online resources dynamically. APIs help software systems exchange information efficiently and provide real time functionality without requiring developers to build everything from scratch.`,

`Problem solving skills are essential for software engineers because applications frequently encounter unexpected bugs and technical challenges. Developers must analyze situations carefully test multiple solutions and optimize systems to ensure reliable application performance.`,

`Applications become successful when they provide useful functionality attractive interfaces and smooth user experiences consistently. Users prefer platforms that are simple fast responsive and capable of solving practical daily life problems effectively.`,

`Continuous learning is extremely important in software engineering because technologies frameworks and development tools evolve rapidly. Developers who regularly practice build projects and explore new technologies adapt more successfully to industry changes.`,

`Database management systems help applications organize store retrieve and manipulate large amounts of information efficiently and securely. Proper database design improves application performance reduces redundancy and ensures reliable handling of user data records.`,

`Frontend developers focus on designing layouts animations forms navigation systems and interactive elements for modern applications. Creating visually attractive and user friendly interfaces plays a major role in improving user engagement and satisfaction.`,

`Building projects regularly helps students transform theoretical programming knowledge into practical development experience effectively. Real world projects improve debugging skills logical thinking creativity and confidence while preparing students for professional software careers.`,

`Artificial intelligence is influencing industries such as healthcare education finance transportation and entertainment with advanced automation systems. Developers are integrating intelligent features into applications to improve decision making personalization and overall user experiences.`,

`Students learning programming should focus on understanding concepts deeply instead of memorizing syntax without practical application. Consistent experimentation and building projects create stronger foundations for future software engineering growth and development.`,

`Modern websites use responsive layouts animations transitions and interactive elements to provide visually attractive experiences for users. Frontend frameworks and libraries help developers create professional applications more efficiently and consistently.`,

`Web applications often require authentication systems to protect user accounts personal information and sensitive application data securely. Secure login systems database encryption and proper validation help improve software reliability and user trust.`,

`Developers working on large applications frequently collaborate with designers testers managers and backend engineers during development cycles. Team communication planning and version control systems help projects progress efficiently and successfully.`,

`Software testing helps developers identify bugs performance issues and unexpected behaviors before applications are released publicly. Proper testing improves application quality stability reliability and overall user satisfaction across different environments.`,

`Learning data structures and algorithms helps programmers solve complex computational problems more efficiently and systematically. Strong logical thinking improves the ability to optimize applications and handle challenging development scenarios effectively.`,

`Technology companies constantly innovate by introducing smarter faster and more efficient digital products and online services globally. Developers contribute significantly to these advancements through creativity experimentation and continuous software improvements.`,

`Responsive applications are designed to work smoothly on smartphones tablets laptops and large desktop screens consistently. Flexible layouts adaptive components and media queries help developers build modern cross platform experiences effectively.`,

`Backend development focuses on servers databases APIs authentication systems and application logic that operate behind the scenes. Full stack developers understand both frontend and backend technologies to create complete software solutions independently.`,

`Students interested in software engineering should practice coding regularly and build increasingly challenging projects over time. Project based learning develops confidence technical understanding creativity and real world problem solving capabilities gradually.`,

`Modern development environments provide tools for debugging testing automation deployment and version management within applications. These tools improve developer productivity and simplify complex software engineering workflows significantly.`,

`Internet based applications allow users to communicate learn shop entertain themselves and access services from virtually anywhere. Reliable connectivity and cloud infrastructure have transformed how modern digital platforms operate globally.`,

`Creating attractive user interfaces requires understanding color combinations spacing typography responsiveness and user interaction principles carefully. Good design improves readability accessibility engagement and overall user satisfaction within applications.`,

`Programming projects become more exciting when developers focus on solving practical real world challenges creatively and efficiently. Applications that provide meaningful functionality often gain greater popularity and long term usefulness among users.`,

`Developers use databases to store user information transactions product details activity logs and application records securely. Structured database systems improve data organization retrieval speed and application scalability effectively.`,

`Technology continues evolving rapidly introducing artificial intelligence automation virtual reality and advanced communication systems worldwide. Developers must continuously learn and adapt to remain effective within modern software engineering industries.`,

`Learning through mistakes debugging challenges and experimentation helps programmers improve their analytical thinking significantly over time. Every project teaches valuable lessons that contribute to stronger software development understanding and confidence.`,

`Applications should focus on simplicity speed security and accessibility to provide better experiences for diverse users globally. Well optimized systems reduce loading times improve performance and increase overall application reliability.`,

`Professional developers often maintain portfolios showcasing projects skills technologies and practical development experience to employers online. GitHub repositories and deployed websites help students demonstrate their technical abilities effectively.`,

`Building web applications requires understanding frontend interfaces backend systems databases APIs hosting and deployment processes together. Full stack development combines multiple technologies to create complete interactive digital solutions successfully.`,

`Software engineering careers require dedication curiosity adaptability and strong communication skills alongside technical programming knowledge. Developers frequently collaborate with teams and contribute ideas throughout project development cycles.`,

`Students improve typing speed more effectively when they focus on both accuracy and consistency during regular practice sessions. Proper keyboard positioning concentration and repetition gradually increase performance and confidence significantly.`,

`Modern digital platforms rely on scalability optimization and cloud infrastructure to support millions of users efficiently worldwide. Developers continuously optimize systems to maintain speed reliability and smooth user experiences.`,

`Learning JavaScript enables developers to create dynamic applications animations validations and interactive features within websites efficiently. JavaScript remains one of the most essential technologies for modern frontend development today.`,

`Project based learning helps beginners understand programming concepts more naturally than studying only theoretical explanations repeatedly. Practical implementation improves retention logical thinking debugging and software development confidence substantially.`,

`Applications designed with user friendly navigation layouts and responsiveness provide smoother experiences across different devices consistently. Good interface design encourages users to interact with applications more comfortably and efficiently.`,

`Programming requires persistence because developers frequently encounter bugs unexpected behaviors and complex technical challenges during projects. Solving these challenges improves analytical thinking and strengthens software engineering experience gradually.`,

`Technology has created opportunities for students developers entrepreneurs and businesses to build innovative online platforms globally. Creative digital solutions continue transforming education communication healthcare entertainment and financial industries rapidly.`,

`Developers should regularly practice coding build projects explore new technologies and improve problem solving abilities continuously. Consistent effort and curiosity are essential qualities for long term growth in software engineering careers.`

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