// Load Places from JSON
async function loadPlaces() {
    const response = await fetch("places.json"); // Ensure correct path
    const places = await response.json(); // Parse JSON

    const gridContainer = document.querySelector(".grid-container");

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Image Element
        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.name;
        card.appendChild(image);

        // Title (Name)
        const title = document.createElement("h2");
        title.textContent = place.name;
        card.appendChild(title);

        // Address
        const address = document.createElement("address");
        address.textContent = place.address;
        card.appendChild(address);

        // Description
        const description = document.createElement("p");
        description.textContent = place.description;
        card.appendChild(description);

        // Cost Information
        const cost = document.createElement("p2");
        cost.textContent = `Cost: ${place.cost}`;
        cost.style.fontWeight = "700";
        card.appendChild(cost);

        // Button Element
        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.addEventListener("click", () => alert(`More details about ${place.name}.`));
        card.appendChild(button);

        // Append card to container
        gridContainer.appendChild(card);
    });
}

// Call function to load places dynamically
loadPlaces();

// Visitor Tracking Feature
const visitorMessage = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysElapsed = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysElapsed < 1) {
        visitorMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitorMessage.textContent = `You last visited ${daysElapsed} ${daysElapsed === 1 ? "day" : "days"} ago.`;
    }
}

// Store current visit time
localStorage.setItem("lastVisit", currentVisit);
