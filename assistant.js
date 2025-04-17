let btn = document.querySelector("#btn");
let bttn = document.querySelector("#bttn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir, Welcome to Smart Learning Hub");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir, Welcome to Smart Learning Hub");
    } else {
        speak("Good Evening Sir, Welcome to Smart Learning Hub");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Initially hide the bttn
bttn.style.display = "none";  // Hide the bttn button initially

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    console.log("User said:", transcript);
    content.innerText = transcript;  // Show the user's message in the content
    takeCommand(transcript.toLowerCase());  // Pass the transcript to process the command
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";  // Show voice icon when listening
    btn.style.display = "none";     // Hide the mic button while speaking
});

function takeCommand(command) {
    voice.style.display = "none";  // Hide the voice icon once processing is complete
    bttn.style.display = "block";  // Show the bttn after the user speaks
    content.innerText = command;   // Display the user's message in the bttn

    // Example commands to demonstrate
    if (command.includes("hello") || command.includes("hey")) {
        speak("Hello sir, what can I help you with?");
    } 
    
    else if (command.includes("who are you")) {
        speak("I am a virtual assistant, created by Aditya Sir");
    } 
    
    else if (command.includes("open home") || 
    command.includes("home") ||
    command.includes("texteditor") ||
    command.includes("go to home") || 
    command.includes("open texteditor") || 
    command.includes("go to texteditor") || 
    command.includes("open home page") || 
    command.includes("go to home page")) {
    window.location.href = "index.html";
    } 
    
    else if (command.includes("open html") || 
    command.includes("html") ||
    command.includes("go to html") || 
    command.includes("open html language") || 
    command.includes("go to html language") || 
    command.includes("open html page") || 
    command.includes("go to html page")) {
    window.location.href = "htmlpage.html";
    } 
    
    else if (command.includes("open game") || 
    command.includes("game") ||
    command.includes("go to games") ) {
    window.location.href = "game.html";
    } 



    else if (command.includes("open css") || 
    command.includes("css") ||
    command.includes("go to css") || 
    command.includes("open css language") || 
    command.includes("go to css language") || 
    command.includes("open css page") || 
    command.includes("go to css page")) {
    window.location.href = "css.html"; 
    } 
    
    else if (command.includes("open javascript") || 
    command.includes("javascript") ||
    command.includes("js") ||
    command.includes("go to javascript") || 
    command.includes("open javascript language") || 
    command.includes("go to javascript language") || 
    command.includes("open javascript page") || 
    command.includes("go to javascript page") ||
    command.includes("open js") || 
    command.includes("go to js") || 
    command.includes("open js language") || 
    command.includes("go to js language") || 
    command.includes("open js page") || 
    command.includes("go to js page")) {
    window.location.href = "javascript.html"; 
    } 
    
    else if (command.includes("open c") || 
    command.includes("c") ||
    command.includes("c language") ||
    command.includes("go to c") || 
    command.includes("open c language") || 
    command.includes("go to c language") || 
    command.includes("open c page") || 
    command.includes("go to c page")) {
    window.location.href = "c.html"; 
    } 

    else if (command.includes("open c++") ||
    command.includes("c") ||
    command.includes("c language") ||
    command.includes("go to c++") || 
    command.includes("open c++ language") || 
    command.includes("go to c++ language") || 
    command.includes("open c++ page") || 
    command.includes("go to c++ page")) {
    window.location.href = "c++.html"; 
    } 

    else if (command.includes("open java") || 
    command.includes("java") ||
    command.includes("java language") ||
    command.includes("go to java") || 
    command.includes("open java language") || 
    command.includes("go to java language") || 
    command.includes("open java page") || 
    command.includes("go to java page")) {
    window.location.href = "java.html"; 
    } 

    else if (command.includes("open python") || 
    command.includes("python") ||
    command.includes("python language") ||
    command.includes("go to python") || 
    command.includes("open python language") || 
    command.includes("go to python language") || 
    command.includes("open python page") || 
    command.includes("go to python page")) {
    window.location.href = "python.html"; 
    } 

    else if (command.includes("open all quizzes") ||
    command.includes("all quizzes") ||
    command.includes("all quizz") ||
    command.includes("go to all quizzes") || 
    command.includes("open quizzes") || 
    command.includes("go to quizzes") || 
    command.includes("open quiz") || 
    command.includes("go to quiz") || 
    command.includes("open home quiz") || 
    command.includes("go to home quizzes")) {
    window.location.href = "allquiz.html";
    }


    else if (command.includes("go to html quiz") || 
    command.includes("open html quiz") ||
    command.includes("html quizzes") ||
    command.includes("html quizz") ||
    command.includes("open hmtl quizzes") ||
    command.includes("go to html quizzes")){
    window.location.href = "htmlquiz.html";
    }


    else if (command.includes("go to css quiz") || 
    command.includes("open css quiz") || 
    command.includes("css quizzes") ||
    command.includes("css quizz") ||
    command.includes("open css quizzes") || 
    command.includes("go to css quizzes")){
    window.location.href = "cssquiz.html";
    }


    else if (command.includes("go to js quiz") || 
    command.includes("open js quiz") || 
    command.includes("javascript quizzes") ||
    command.includes("js quiz") ||
    command.includes("open js quizzes") || 
    command.includes("go to js quizzes") || 
    command.includes("go to javascript quiz") || 
    command.includes("open javascript quiz") || 
    command.includes("open javascript quizzes") || 
    command.includes("go to javascript quizzes")){
    window.location.href = "jsquiz.html";
    }


    else if (command.includes("open c quizzes") || 
    command.includes("go to c quizzes") || 
    command.includes("c quizzes") ||
    command.includes("c quizz") ||
    command.includes("open c language quiz") || 
    command.includes("go to c language quizzes") || 
    command.includes("open c quiz") || 
    command.includes("go to c quiz") || 
    command.includes("open c language quiz") || 
    command.includes("go to c language quizzes")) {
    window.location.href = "cquiz.html";
    }


    else if (command.includes("open c++ quizzes") || 
    command.includes("go to c++ quizzes") ||
    command.includes("c++ quizzes") ||
    command.includes("c++ quizz") || 
    command.includes("open c++ language quiz") || 
    command.includes("go to c++ language quizzes") || 
    command.includes("open c++ quiz") || 
    command.includes("go to c++ quiz") || 
    command.includes("open c++ language quiz") || 
    command.includes("go to c++ language quizzes")) {
    window.location.href = "c++quiz.html";
    }


    else if (command.includes("open java quizzes") || 
    command.includes("go to java quizzes") ||
    command.includes("java quizzes") ||
    command.includes("java quizz") || 
    command.includes("open java language quiz") || 
    command.includes("go to java language quizzes") || 
    command.includes("open java quiz") || 
    command.includes("go to java quiz") || 
    command.includes("open java language quiz") || 
    command.includes("go to java language quizzes")) {
    window.location.href = "javaquiz.html";
    }


    else if (command.includes("open python quizzes") || 
    command.includes("go to python quizzes") || 
    command.includes("python quizzes") ||
    command.includes("python quizz") ||
    command.includes("open python language quiz") || 
    command.includes("go to python language quizzes") || 
    command.includes("open python quiz") || 
    command.includes("go to python quiz") || 
    command.includes("open python language quiz") || 
    command.includes("go to python language quizzes")) {
    window.location.href = "pythonquiz.html";
    }


    else if (command.includes("open all notes") ||
    command.includes("go to all notes") ||
    command.includes("all notes") ||
    command.includes("all note") || 
    command.includes("open notes") || 
    command.includes("go to note") || 
    command.includes("open note") || 
    command.includes("go to notes") || 
    command.includes("open home note") || 
    command.includes("go to home notes")) {
    window.location.href = "allnotes.html";
    }


    else if (command.includes("open html notes") || 
    command.includes("go to html notes") || 
    command.includes("html notes") ||
    command.includes("html note") || 
    command.includes("open html language note") || 
    command.includes("go to html language notes") || 
    command.includes("open html note") || 
    command.includes("go to html note") || 
    command.includes("open html language notes") || 
    command.includes("go to html language notes")) {
    window.location.href = "htmlnote.html";
    }


    else if (command.includes("open css notes") || 
    command.includes("go to css notes") ||
    command.includes("css notes") ||
    command.includes("css note") ||  
    command.includes("open css language note") || 
    command.includes("go to css language notes") || 
    command.includes("open css note") || 
    command.includes("go tocss note") || 
    command.includes("opencss language notes") || 
    command.includes("go to css language notes")) {
    window.location.href = "cssnote.html";
    }


    else if (command.includes("open js notes") || 
    command.includes("go to javascript notes") ||
    command.includes("js notes") ||
    command.includes("javascript notes") ||  
    command.includes("open js language note") || 
    command.includes("go to javascript language notes") || 
    command.includes("open javascript note") || 
    command.includes("go to python note") || 
    command.includes("open javascript language notes") || 
    command.includes("go to javascript language notes")) {
    window.location.href = "jsnote.html";
    }


    else if (command.includes("open c notes") || 
    command.includes("go to c notes") || 
    command.includes("c notes") ||
    command.includes("c note") || 
    command.includes("open c language note") || 
    command.includes("go to c language notes") || 
    command.includes("open c note") || 
    command.includes("go to c note") || 
    command.includes("open c language notes") || 
    command.includes("go to c language notes")) {
    window.location.href = "cnote.html";
    }


    else if (command.includes("open c++ notes") || 
    command.includes("go to c++ notes") || 
    command.includes("c++ notes") ||
    command.includes("c++ note") || 
    command.includes("open c++ language note") || 
    command.includes("go to c++ language notes") || 
    command.includes("open c++ note") || 
    command.includes("go to c++ note") || 
    command.includes("open c++ language notes") || 
    command.includes("go to c++ language notes")) {
    window.location.href = "c++note.html";
    }  
    
    
    else if (command.includes("open java notes") || 
    command.includes("go to java notes") || 
    command.includes("java notes") ||
    command.includes("java note") || 
    command.includes("open java language note") || 
    command.includes("go to java language notes") || 
    command.includes("open java note") || 
    command.includes("go to java note") || 
    command.includes("open java language notes") || 
    command.includes("go to java language notes")) {
    window.location.href = "javanote.html";
    }



    else if (command.includes("open python notes") || 
    command.includes("go to python notes") ||
    command.includes("python notes") ||
    command.includes("python note") ||  
    command.includes("open python language note") || 
    command.includes("go to python language notes") || 
    command.includes("open python note") || 
    command.includes("go to python note") || 
    command.includes("open python language notes") || 
    command.includes("go to python language notes")) {
    window.location.href = "pythonnote.html";
    }

    
    else if (command.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } 
    
    else if (command.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (command.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } 
    
    else if (command.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } 
    
    else if (command.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } 
    
    else if (command.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } 
    
    else if (command.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } 
    
    else if (command.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    
    else {
        let finalText = "This is what I found on the internet regarding " + command.replace("shipra", "") || command.replace("shifra", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${command.replace("shipra", "")}`, "_blank");
    }
}
