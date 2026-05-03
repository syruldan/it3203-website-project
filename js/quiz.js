/* js/quiz.js - FULL REPLACEMENT */

// Toggles the visibility of the nav menu on mobile devices
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

// Validates the quiz and provides feedback
function gradeQuiz() {
    let score = 0;
    const results = document.getElementById('results');
    
    // Q1 Check
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    if (q1 === "hypertext markup language") score++;

    // Q2 Check
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "css") score++;

    results.innerHTML = `<h3 style="color: ${score === 2 ? 'green' : 'red'}">Result: ${score}/2 Correct</h3>`;
}
