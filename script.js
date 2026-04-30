const memeLibrary = {
    meme: [
        { path: "meme/pahom.jpg", text: "Вот в деревнях-то было всё!" },
        { path: "meme/64.jpg", text: "шесть семь" },
        { path: "meme/bomba.webp", text: "Кхе-кхе ааааа кхе-кхе" },
        { path: "meme/bomba2.jfif", text: "ааа наоборот" }
    ],
    other: [
        { path: "meme/shakal.jfif", text: "Вас тоже бесят фейк пнг в гугле?" },
        { path: "meme/bigbang.jpg", text: "Орешки biiiigbob" }
    ],
    radon: [
        { path: "meme/radon.jpg", text: "Радон санаторий" }
    ]
};

// Элементы экранов
const screenStart = document.getElementById('screenStart');
const screenMenu = document.getElementById('screenMenu');
const screenResult = document.getElementById('screenResult');

// Элементы контента
const memeImage = document.getElementById('memeImage');
const memeText = document.getElementById("memeText");

// Кнопки управления
const btnStart = document.getElementById('btnStart');
const choiceButtons = document.querySelectorAll('.choiceButton');
const btnNextSame = document.getElementById('btnNextSame');
const btnNextRandom = document.getElementById('btnNextRandom');
const btnHome = document.getElementById('btnHome');

let currentCategory = '';

function displayMeme(category) {
    currentCategory = category;
    const sourceList = memeLibrary[category] || memeLibrary.meme;
    const randomMeme = sourceList[Math.floor(Math.random() * sourceList.length)];
    
    memeImage.src = randomMeme.path;
    memeText.innerText = randomMeme.text;

    screenMenu.classList.add('hidden');
    screenResult.classList.remove('hidden');
}

btnStart.addEventListener('click', () => {
    screenStart.classList.add('hidden');
    screenMenu.classList.remove('hidden');
});

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        let category = button.getAttribute('data-category');
        if (category && memeLibrary[category]) {
            displayMeme(category);
        }
    });
});

btnNextSame.addEventListener('click', () => {
    displayMeme(currentCategory);
});

btnNextRandom.addEventListener('click', () => {
    const allCategories = Object.keys(memeLibrary);
    const otherCategories = allCategories.filter(cat => cat !== currentCategory);
    const randomCat = otherCategories[Math.floor(Math.random() * otherCategories.length)];
    
    displayMeme(randomCat);
});

btnHome.addEventListener('click', () => {
    screenResult.classList.add('hidden');
    screenStart.classList.remove('hidden');
});