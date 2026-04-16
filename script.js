// База данных ссылок (замени на свои)
const memeLibrary = {
    meme: [

    ],
    other: [

    ],
    radon: [

    ],
    kitty: [
        
    ]
};

const btnStart = document.getElementById('btnStart');
const screenStart = document.getElementById('screenStart');
const screenMenu = document.getElementById('screenMenu');
const screenResult = document.getElementById('screenResult');
const memeImage = document.getElementById('memeImage');
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
        if (category === 'kitty') category = 'kitty';

        const sourceList = memeLibrary[category] || memeLibrary.meme;
        
        const randomImage = sourceList[Math.floor(Math.random() * sourceList.length)];
        
        memeImage.src = randomImage;
        screenMenu.classList.add('hidden');
        screenResult.classList.remove('hidden');
    });
});