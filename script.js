const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "assets/images/icon-visual.svg"
    }
];

let sum = 0;

data.forEach(function (item) {
    sum += item.score;
});

const averageScore = sum / data.length;

const result = document.querySelector('.degree-num');
result.textContent = Math.round(averageScore); 


document.addEventListener("DOMContentLoaded", function () {
    const summaryElements = document.querySelector(".summary__elements");

    data.forEach(function (item) {

        const listItem = document.createElement("li");
        listItem.className = `list__items--${item.category.toLowerCase()}`;


        const icon = document.createElement("img");
        icon.className = "stats-list__item-icon";
        icon.src = item.icon;
        icon.alt = "";
        icon.width = 20;
        icon.height = 20;

        const title = document.createElement("span");
        title.className = "item-title";
        title.textContent = item.category;

        const result = document.createElement("span");
        result.className = "item-result";
        result.textContent = item.score;


        const max = document.createElement("span");
        max.className = "item-max";
        max.textContent = " / 100";

        listItem.appendChild(icon);
        listItem.appendChild(title);
        listItem.appendChild(result);
        listItem.appendChild(max);

        summaryElements.appendChild(listItem);
    });
});



const elThemeTogglerButton = document.querySelector('.theme-toggle-button');

function switchTheme() {
    const elRoot = document.documentElement
    let dataTheme = elRoot.getAttribute('data-theme');

    let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    elRoot.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
}

if (elThemeTogglerButton) {
    elThemeTogglerButton.addEventListener('click', switchTheme);
}
