function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

function gradeQuiz() {
    let score = 0;
    const totalQuestions = 4;
    const results = document.getElementById('results');

    // Q1: Text Input
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    if (q1 === "hypertext markup language") score++;

    // Q2: Radio
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "css") score++;

    // Q3: Radio (New)
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "backlinks") score++;

    // Q4: Radio (New)
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "crawling") score++;

    let message = "";
    if (score === totalQuestions) {
        message = "Perfect Score! You are an SEO Expert.";
    } else if (score >= 2) {
        message = "Good job! You're getting the hang of it.";
    } else {
        message = "Keep studying the content and try again!";
    }

    results.innerHTML = `
        <div style="margin-top:20px; padding:15px; border-radius:5px; background:white; border: 2px solid var(--accent);">
            <h3>Your Score: ${score} / ${totalQuestions}</h3>
            <p>${message}</p>
        </div>
    `;
}
