// База данных ссылок (замени на свои)
const memeLibrary = {
    meme: [
        "meme/pahom.jpg",
        "meme/64.jpg",
        "meme/bomba.webp",
        "meme/bomba2.jfif"
    ],
    other: [
        "meme/shakal.jfif",
    ],
    radon: [
        "meme/radon.jpg",
    ],
    // kitty: [

    // ]
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
        //if (category === 'kitty') category = 'kitty';


        const sourceList = memeLibrary[category] || memeLibrary.meme;
        
        const randomImage = sourceList[Math.floor(Math.random() * sourceList.length)];
        
        memeImage.src = randomImage;
        memeText.innerText = "прорпаорпкргоекр";
        screenMenu.classList.add('hidden');
        screenResult.classList.remove('hidden');
    });
});