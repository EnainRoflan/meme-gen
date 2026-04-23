const memeLibrary = {
    meme: [
        { path: "meme/pahom.jpg", text: "Вот в деревнях-то было всё!" },
        { path: "meme/64.jpg", text: "шесть семь" },
        { path: "meme/bomba.webp", text: "Кхе-кхе ааааа кхе-кхе" },
        { path: "meme/bomba2.jfif", text: "ааа наоборот" }
    ],
    other: [
        { path: "meme/shakal.jfif", text: "Вас тоже бесят фейк пнг в гугле?" }
    ],
    radon: [
        { path: "meme/radon.jpg", text: "Радон санаторий" }
    ]
};

const btnStart = document.getElementById('btnStart');
const screenStart = document.getElementById('screenStart');
const screenMenu = document.getElementById('screenMenu');
const screenResult = document.getElementById('screenResult');
const memeImage = document.getElementById('memeImage');
const memeText = document.getElementById("memeText");

const choiceButtons = document.querySelectorAll('.choiceButton');

btnStart.addEventListener('click', () => {
    screenStart.classList.add('hidden');
    screenMenu.classList.remove('hidden');
});

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        let category = button.textContent.trim().toLowerCase();
        
        if (category === 'меме') category = 'meme';
        if (category === 'чё-нидь ещё') category = 'other';
        if (category === 'радон') category = 'radon';

        const sourceList = memeLibrary[category] || memeLibrary.meme;
        const randomMeme = sourceList[Math.floor(Math.random() * sourceList.length)];
        
        memeImage.src = randomMeme.path;
        memeText.innerText = randomMeme.text;

        screenMenu.classList.add('hidden');
        screenResult.classList.remove('hidden');
    });
});
