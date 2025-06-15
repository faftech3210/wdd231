document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("myButton");
    const closeButton = document.getElementById("closeButton");
    const menu = document.querySelector(".menulinks");

    menuButton.addEventListener("click", () => {
        menu.classList.add("show"); // Show menu
        menuButton.style.display = "none"; // Hide menu button
        closeButton.style.display = "block"; // Show close button
    });

    closeButton.addEventListener("click", () => {
        menu.classList.remove("show"); // Hide menu
        closeButton.style.display = "none"; // Hide close button
        menuButton.style.display = "block"; // Show menu button
    });

    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;


    // Dynamic Quote Loading
    const quotes = [
        `"Books are a uniquely portable magic." - Stephen King`,
        `"A reader lives a thousand lives before he dies." - George R.R. Martin`,
        `"Not all those who wander are lost." - J.R.R. Tolkien`
    ];

    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
