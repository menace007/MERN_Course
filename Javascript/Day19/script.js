const quotes = [
    "Honesty is the best policy.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Actions speak louder than words.",
    "Never give up on your dreams.",
    "Success is the sum of small efforts repeated daily.",
    "Knowledge is power.",
    "Be the change you wish to see in the world.",
    "Every moment is a fresh beginning.",
    "Hard work beats talent when talent doesn't work hard.",
    "Stay hungry, stay foolish.",
    "The best way out is always through.",
    "Do what you can, with what you have, where you are.",
    "Great things never come from comfort zones.",
    "Believe in yourself and all that you are.",
    "Failure is the first step toward success.",
    "Happiness depends upon ourselves.",
    "A journey of a thousand miles begins with a single step.",
    "Your only limit is your mind.",
    "It always seems impossible until it's done."
];
const quotedy = document.getElementById("quote");
function changeQuote(){
    const random = Math.floor(Math.random()*quotes.length);
    quotedy.textContent = quotes[random];
}
setInterval(changeQuote, 5000);