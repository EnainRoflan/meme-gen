const face = document.querySelector('.face');
const memMenu = document.querySelector('.memMenu');
const startBtn = document.querySelector('.face .startButton');
const choiceButtons = document.querySelectorAll('.choiceMenu .startButton');

startBtn.addEventListener('click', () => {
    face.style.display = 'none';
    memMenu.style.display = 'block';
});

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase();
        generateMeme(category);
    });
});

function generateMeme(category) {
    alert(`Генерируем мем для категории...: ${category}`);
    window.open(`https://unsplash.com{category}`, '_blank');
}
