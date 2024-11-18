// Select the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementsByClassName('skill');
// Add a click event listener to the button
toggleButton.addEventListener('click', function () {
    // Iterate over all elements with the class 'skill'
    for (var i = 0; i < skillsSection.length; i++) {
        // Check if the skills section is currently displayed
        if (skillsSection[i].style.display === 'none') {
            // If it's hidden, show it
            skillsSection[i].style.display = 'block';
            toggleButton.textContent = 'Hide Skills'; // Change button text
        }
        else {
            // If it's shown, hide it
            skillsSection[i].style.display = 'none';
            toggleButton.textContent = 'Show Skills'; // Change button text
        }
    }
});
