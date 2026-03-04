// script.js - Interaktivitas untuk aplikasi belajar SD

// Fungsi untuk memeriksa jawaban soal
function checkAnswer(questionId, correctAnswer) {
    const userAnswer = document.getElementById(questionId).value.trim();

    if (!userAnswer) {
        alert('Silakan masukkan jawaban terlebih dahulu!');
        return;
    }

    // Membandingkan jawaban tanpa memperhatikan huruf besar/kecil
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Jawaban Anda benar! 🎉');
    } else {
        alert(`Jawaban Anda salah. Jawaban yang benar: "${correctAnswer}"`);
    }
}

// Menambahkan event listener pada semua tombol cek jawaban
const checkButtons = document.querySelectorAll('button');

checkButtons.forEach(button => {
    button.addEventListener('click', function () {
        const questionInput = button.previousElementSibling;
        const questionId = questionInput.id;
        const correctAnswer = button.getAttribute('data-answer');
        checkAnswer(questionId, correctAnswer);
    });
});
