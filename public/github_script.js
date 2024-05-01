let languageBoxes = [];

document.addEventListener('DOMContentLoaded', function () {
  var languageBoxes = document.querySelectorAll('.language-box');

  languageBoxes.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      // Add a class to the hovered element
      // Remove the class from all other elements
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
      });
    });
  });
});
