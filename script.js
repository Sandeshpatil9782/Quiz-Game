const questions = [
    { q: "23 - 56 + 10 = ?", a: -23 },
    { q: "45 + 12 - 30 = ?", a: 27 },
    { q: "100 - 45 + 20 = ?", a: 75 },
    { q: "60 - 25 - 10 = ?", a: 25 },
    { q: "35 + 18 - 22 = ?", a: 31 },
    { q: "80 - 40 + 15 = ?", a: 55 },
    { q: "25 - 50 * 4 = ?", a: -175 }
];

let current;
let score = 0;
let time = 30;
let timer;
let totalQuestions = 0;
let maxQuestions = 10;

function startGame() {

    score = 0;
    totalQuestions = 0;

    document.getElementById("answer").disabled = false;
    document.getElementById("score").innerText = score;
    document.getElementById("result").innerText = "";

    nextQuestion();
}

function nextQuestion() {

    if (totalQuestions >= maxQuestions) {
        endGame();
        return;
    }

    totalQuestions++;

    current = questions[Math.floor(Math.random() * questions.length)];

    document.getElementById("question").innerText = current.q;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    time = 30;
    document.getElementById("timer").innerText = time;

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

function updateTime() {

    time--;

    document.getElementById("timer").innerText = time;

    if (time <= 0) {

        clearInterval(timer);

        document.getElementById("result").innerText =
            "⏰ Time Up! Better luck next time 😅";

        setTimeout(nextQuestion, 1000);
    }
}

function check() {

    let ans = parseInt(document.getElementById("answer").value);

    if (ans === current.a) {

        score++;

        document.getElementById("score").innerText = score;

        document.getElementById("result").innerText =
            "🎉 Correct!";

        setTimeout(nextQuestion, 800);

    } else {

        clearInterval(timer);

        document.getElementById("result").innerText =
            "❌ Wrong! Better luck next time 😅";

        setTimeout(() => {
            window.location.href =
                "https://github.com/Sandeshpatil9782";
        }, 1500);
    }
}

function endGame() {

    clearInterval(timer);

    let msg = "";

    if (score >= 8) {
        msg = "🏆 Excellent!";
    } else if (score >= 5) {
        msg = "👍 Good Job!";
    } else {
        msg = "😅 Try Again!";
    }

    document.getElementById("question").innerText =
        "Game Over";

    document.getElementById("result").innerText = msg;
}