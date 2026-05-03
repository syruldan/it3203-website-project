function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

function gradeQuiz() {
    let score = 0;
    const totalQuestions = 5;
    const results = document.getElementById('results');

    // Q1: Text Input (Case-insensitive)
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    if (q1 === "hypertext markup language") score++;

    // Q2: Radio Button (Single Choice)
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "css") score++;

    // Q3: Radio Button (Single Choice)
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "backlinks") score++;

    // Q4: Checkboxes (Multiple Choice)
    // Correct answers are 'title' and 'meta'
    const q4a = document.getElementById('q4a').checked;
    const q4b = document.getElementById('q4b').checked;
    const q4c = document.getElementById('q4c').checked;
    if (q4a && q4b && !q4c) score++;

    // Q5: Radio Button (Single Choice)
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "crawling") score++;

    // Results logic
    let feedback = "";
    if (score === totalQuestions) {
        feedback = "Excellent! You have a strong grasp of SEO fundamentals.";
    } else if (score >= 3) {
        feedback = "Great job! You understand the basics well.";
    } else {
        feedback = "Keep reviewing the 'Key Concepts' and 'Topic' pages to improve.";
    }

    results.innerHTML = `
        <div style="margin-top: 20px; padding: 20px; border: 2px solid var(--accent); background: #fff; border-radius: 8px;">
            <h2 style="color: var(--primary);">Your Score: ${score} / ${totalQuestions}</h2>
            <p>${feedback}</p>
            <button onclick="location.reload()" style="margin-top:10px; cursor:pointer; padding:5px 10px;">Retry Quiz</button>
        </div>
    `;
}
