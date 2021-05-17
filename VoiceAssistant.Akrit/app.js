const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'im good thank you',
    'life is miserable right now',
    'thou art poo poo'
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

    window.speechSynthesis.speak(speech)

}