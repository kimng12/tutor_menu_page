function toggleReadMore() {
    var fullIntro = document.querySelector('.tutor-introduction-full');
    var shortIntro = document.querySelector('.tutor-introduction-short');
    var readMoreBtn = document.querySelector('.info-button');

    // Check if the full intro is currently shown
    if (fullIntro.style.display === 'none') {
        fullIntro.style.display = 'block'; // Show the full intro
        shortIntro.style.display = 'none';  // Hide the short intro
        readMoreBtn.textContent = 'Read less'; // Change button text to "Read less"
    } else {
        fullIntro.style.display = 'none';   // Hide the full intro
        shortIntro.style.display = 'block'; // Show the short intro
        readMoreBtn.textContent = 'Read more'; // Change button text back to "Read more"
    }
}
