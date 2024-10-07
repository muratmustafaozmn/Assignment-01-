/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = ''; // This will store the final story text
var storyElement = document.getElementById('story');

// Arrays with unique words
var subjects = ['A musician', 'The detective', 'An astronaut', 'The inventor', 'A traveler'];
var verbs = ['discovers', 'builds', 'explores', 'solves', 'analyzes'];
var adjectives = ['mysterious', 'brilliant', 'curious', 'astonishing', 'bizarre'];
var objects = ['an ancient artifact', 'a new planet', 'a secret formula', 'a hidden tunnel', 'an encrypted code'];
var places = ['in a distant galaxy', 'in the heart of a jungle', 'at a research facility', 'in a bustling market', 'on a remote island'];

// Random word generator
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* Functions */
function speakNow(string) {
    console.log("Preparing to speak: ", string); // Debugging statement
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('subject-btn').onclick = function() {
    textToSpeak = getRandomWord(subjects);
    storyElement.textContent = textToSpeak; // Display in the story area
    console.log("Current story: ", textToSpeak); // Debugging statement
};

document.getElementById('verb-btn').onclick = function() {
    textToSpeak += ' ' + getRandomWord(verbs);
    storyElement.textContent = textToSpeak; // Update story area
    console.log("Current story: ", textToSpeak); // Debugging statement
};

document.getElementById('adjective-btn').onclick = function() {
    textToSpeak += ' ' + getRandomWord(adjectives);
    storyElement.textContent = textToSpeak; // Update story area
    console.log("Current story: ", textToSpeak); // Debugging statement
};

document.getElementById('object-btn').onclick = function() {
    textToSpeak += ' ' + getRandomWord(objects);
    storyElement.textContent = textToSpeak; // Update story area
    console.log("Current story: ", textToSpeak); // Debugging statement
};

document.getElementById('place-btn').onclick = function() {
    textToSpeak += ' ' + getRandomWord(places);
    storyElement.textContent = textToSpeak; // Final update before speaking
    console.log("Final story: ", textToSpeak); // Debugging statement
};

// Speak the sentence when the Speak button is clicked
document.getElementById('speak-btn').onclick = function() {
    console.log("Speak button clicked"); // Debugging statement
    speakNow(textToSpeak);
};
