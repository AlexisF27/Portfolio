let languageBoxes = [];

document.addEventListener('DOMContentLoaded', function () {
  var languageBoxes = document.querySelectorAll('.language-box');
  languageBoxes.forEach(function (element) {
    element.classList.add('animate__animated');
    element.classList.add('animate__heartBeat');
  });

  languageBoxes.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.classList.remove('animate__heartBeat');
      element.firstElementChild.classList.add('animate__animated');

      element.firstElementChild.classList.add('animate__flip');

      languageBoxes.forEach(function (box) {
        if (box !== element) {
          box.classList.add('blur');
        }
      });
    });

    // Add event listener for mouseout
    element.addEventListener('mouseout', function () {
      // Remove the class when the mouse moves out of the element
      languageBoxes.forEach(function (box) {
        box.classList.remove('blur');
        box.firstElementChild.classList.remove('animate__flip');
      });
    });
  });
});
