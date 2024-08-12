const quotes = [
    "Space exploration is the next frontier.",
    "Life is a journey through the cosmos.",
    "Introverts, deep thinkers, strong minds.",
    "Social media detox: reclaim your life."
];

let quoteIndex = 0;
let charIndex = 0;
const quoteElement = document.getElementById('quote');

function typeQuote() {
    if (charIndex < quotes[quoteIndex].length) {
        quoteElement.textContent += quotes[quoteIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeQuote, 100);
    } else {
        setTimeout(deleteQuote, 4000);
    }
}

function deleteQuote() {
    if (charIndex > 0) {
        quoteElement.textContent = quotes[quoteIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteQuote, 50);
    } else {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        setTimeout(typeQuote, 1000);
    }
}

typeQuote();

const bubbleTexts = [
    "Today is a great day.",
    "Life is full of wonders.",
    "How's life going?",
    "I love batteries.",
    "One of my friends is on Mars."
];

let bubbleIndex = 0;
let bubbleCharIndex = 0;
const bubbleElement = document.getElementById('bubble');

function typeBubbleText() {
    if (bubbleCharIndex < bubbleTexts[bubbleIndex].length) {
        bubbleElement.textContent += bubbleTexts[bubbleIndex].charAt(bubbleCharIndex);
        bubbleCharIndex++;
        setTimeout(typeBubbleText, 100);
    } else {
        setTimeout(() => {
            bubbleCharIndex = 0;
            bubbleElement.textContent = "";
            bubbleIndex = (bubbleIndex + 1) % bubbleTexts.length;
        }, 4000);
    }
}

document.querySelector('.header-gif img').addEventListener('mouseover', () => {
    bubbleElement.textContent = "";  
    bubbleCharIndex = 0;  
    typeBubbleText();  
});
