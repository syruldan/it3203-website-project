// Grades quiz and shows results
function gradeQuiz(){

let score = 0;
let results = "";

if(document.getElementById("q1").value.toLowerCase()
==="hypertext markup language"){
score++;
results+="Q1 Correct<br>";
}else{
results+="Q1 Incorrect<br>";
}

if(document.querySelector('input[name="q2"]:checked')?.value==="css"){
score++;
results+="Q2 Correct<br>";
}else{
results+="Q2 Incorrect<br>";
}

if(document.querySelector('input[name="q3"]:checked')?.value==="interactivity"){
score++;
results+="Q3 Correct<br>";
}else{
results+="Q3 Incorrect<br>";
}

if(document.querySelector('input[name="q4"]:checked')?.value==="a"){
score++;
results+="Q4 Correct<br>";
}else{
results+="Q4 Incorrect<br>";
}

let checks=document.querySelectorAll('input[name="q5"]:checked');
if(checks.length===2){
score++;
results+="Q5 Correct<br>";
}else{
results+="Q5 Incorrect<br>";
}

let pass = score>=3 ? "PASS" : "FAIL";

document.getElementById("results").innerHTML=
`<h2>${pass}</h2>
<p>Score: ${score}/5</p>
${results}`;
}

function resetQuiz(){
document.getElementById("results").innerHTML="";
}
