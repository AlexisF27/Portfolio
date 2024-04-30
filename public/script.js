let iterations = 0;
let sentences = [];

document.addEventListener('DOMContentLoaded', function() {

  const lettersElements = document.getElementsByClassName("letters");
  const intervalIDs = [];

  const languageBoxes = document.querySelectorAll('.language-box');
  const githubSection = document.getElementById('section-github');

  languageBoxes.forEach(box => {
    box.addEventListener('mouseover', function() {
      githubSection.classList.add('blur');
    });

    box.addEventListener('mouseout', function() {
      githubSection.classList.remove('blur');
    });
  });


  for (let i = 0; i < lettersElements.length - 1; i++) {
    const originalSentence = lettersElements[i].innerText;
    sentences.push({ original: originalSentence, modified: ' ' });
    const intervalID = setInterval(() => modifySentence(i, intervalIDs), 80);
    intervalIDs.push(intervalID); 
  }

  setTimeout(startAnimation, 50);
  
});


function startAnimation() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(function(star, index) {
    star.style.animationDelay = `-${index * 0.50}s`; // Delay each star's animation based on its index
  });
}


function modifySentence(index, intervalIDs) {
  if (iterations < 30) {
    const originalSentence = sentences[index].original;
    let modifiedSentence = '';
    for (let i = 0; i < originalSentence.length -1; i++) {
      if (originalSentence[i] === ' ') {
        modifiedSentence += ' ';
      } else {
        modifiedSentence += getRandomLetter();
      }
    }
    iterations++;
    updateElementText(index, modifiedSentence);
  } else {
    restoreOriginalSentence(index);
    clearInterval(intervalIDs[index]); // Stop the interval
  }
}

function getRandomLetter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function updateElementText(index, newText) {
  const lettersElements = document.getElementsByClassName("letters");
  if (lettersElements[index]) {
    lettersElements[index].innerText = newText;
  } else {
    console.error(`Element at index ${index} not found.`);
  }
}

function restoreOriginalSentence(index) {
  const originalSentence = sentences[index] ? sentences[index].original : null;
  if (originalSentence !== null) {
    updateElementText(index, originalSentence);
  } else {
    console.error(`Original sentence not found for index ${index}.`);
  }
}
