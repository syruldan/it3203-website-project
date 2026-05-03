function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

function gradeQuiz() {
    let score = 0;
    const results = document.getElementById('results');
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    if (q1 === "hypertext markup language") score++;
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "css") score++;
    results.innerHTML = `<h3 style="color: ${score === 2 ? 'green' : 'red'}">Result: ${score}/2 Correct</h3>`;
}
