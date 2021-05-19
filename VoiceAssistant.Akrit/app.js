const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'I am good thank you',
    'It is amazing to be digitally alive',
    'You are poo poo arjit'
];
const weather = [
    'normal Scottish weather',
    'um.. maybe its raining',
    'its beautiful sunshine'
];

recognition.onstart = function() {
    
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1
    speech.text = 'i dont know, you said ' + message;

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        speech.text = finalText
    }
    if(message.includes('what is the weather')) {
        const finalText = greetings[Math.floor(Math.random() * weather.length)]
        speech.text = finalText
    }
    if(message.includes('who are you')) {
        const finalText = 'I am the Akrit Voice Assistant 1.0'
        speech.text = finalText
    }


    window.speechSynthesis.speak(speech)

}

// function getLocalStream() {
//     navigator.mediaDevices.getUserMedia({video: false, audio: true}).then(stream => {
//         window.localStream = stream;
//         window.localAudio.srcObject = stream;
//         window.localAudio.autoPlay = true;
//     }).catch(err => {
//         console.log('you have an error' + err)
//     })
// }

// getLocalStream();

