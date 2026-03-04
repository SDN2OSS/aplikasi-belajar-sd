// script.js - Interaktivitas untuk aplikasi belajar SD

// Fungsi untuk memeriksa jawaban soal
function checkAnswer(questionId, correctAnswer) {
    const userAnswer = document.getElementById(questionId).value.trim();

    if (userAnswer === correctAnswer) {
        alert('Jawaban Anda benar!');
    } else {
        alert('Jawaban Anda salah. Coba lagi!');
    }
}

// Menambahkan event listener pada tombol cek jawaban
const checkButtons = document.querySelectorAll('button');

checkButtons.forEach(button => {
    button.addEventListener('click', function () {
        const questionId = button.previousElementSibling.id;
        const correctAnswer = button.getAttribute('data-answer');
        checkAnswer(questionId, correctAnswer);
    });
});