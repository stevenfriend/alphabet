const letterDisplay = document.getElementById('letterDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const counterDisplay = document.createElement('div'); // Create a counter display
document.body.appendChild(counterDisplay); // Append it to the body

let currentLetterIndex = 0;
const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let alphabet = [...originalAlphabet]; // Clone the original alphabet
let isShuffled = false; // Track shuffle state

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateLetter() {
    letterDisplay.textContent = alphabet[currentLetterIndex];
    // Update the counter display
    counterDisplay.textContent = `${currentLetterIndex + 1} / ${alphabet.length}`;
    counterDisplay.style.position = 'absolute'; // Position the counter
    counterDisplay.style.top = '20px';
    counterDisplay.style.right = '20px';
    counterDisplay.style.fontSize = '20px';
}

prevBtn.addEventListener('click', () => {
    if (currentLetterIndex > 0) {
        currentLetterIndex -= 1;
    } else {
        currentLetterIndex = alphabet.length - 1; // Loop back to end
    }
    updateLetter();
});

nextBtn.addEventListener('click', () => {
    if (currentLetterIndex < alphabet.length - 1) {
        currentLetterIndex += 1;
    } else {
        currentLetterIndex = 0; // Loop back to start
    }
    updateLetter();
});

shuffleBtn.addEventListener('click', () => {
    if (!isShuffled) {
        shuffleArray(alphabet);
        isShuffled = true;
        shuffleBtn.textContent = "Unshuffle";
    } else {
        alphabet = [...originalAlphabet];
        isShuffled = false;
        shuffleBtn.textContent = "Shuffle";
    }
    currentLetterIndex = 0; // Reset to start of the alphabet
    updateLetter();
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Initialize the display
updateLetter();
