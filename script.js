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

document.addEventListener("DOMContentLoaded", function () {
    const summaryElements = document.querySelector(".summary__elements");

    data.forEach(function (item) {
        // Create a new list item for each data item
        const listItem = document.createElement("li");
        listItem.className = `list__items--${item.category.toLowerCase()}`;

        // Create and configure the image element
        const icon = document.createElement("img");
        icon.className = "stats-list__item-icon";
        icon.src = item.icon;
        icon.alt = "";
        icon.width = 20;
        icon.height = 20;

        // Create and configure the spans for title, result, percent label, and max
        const title = document.createElement("span");
        title.className = "item-title";
        title.textContent = item.category;

        const result = document.createElement("span");
        result.className = "item-result";
        result.textContent = item.score;


        const max = document.createElement("span");
        max.className = "item-max";
        max.textContent = " / 100";

        // Append all elements to the list item
        listItem.appendChild(icon);
        listItem.appendChild(title);
        listItem.appendChild(result);
        listItem.appendChild(max);

        // Append the list item to the summary elements
        summaryElements.appendChild(listItem);
    });
});
