document.addEventListener("DOMContentLoaded", function () {
    // **Toggle Navigation Menu**
    const navMenu = document.querySelector(".nav-bar ul");
    const menuButton = document.getElementById("myButton");
    const closeButton = document.getElementById("closeButton");

    menuButton.addEventListener("click", function () {
        navMenu.style.display = "flex";
        menuButton.style.display = "none";
        closeButton.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        navMenu.style.display = "none";
        menuButton.style.display = "block";
        closeButton.style.display = "none";
    });

    // **Event Listener for Membership Buttons**
    const membershipButtons = document.querySelectorAll(".membership-cards button");

    membershipButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Extract modal ID from button onclick attribute
            const functionName = button.getAttribute("onclick").match(/showModal\('([^']+)'\)/);
            if (functionName) {
                showModal(functionName[1]);
            }
        });
    });
});

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// **Modal Functionality**
function showModal(modalId) {
    alert(`Opening modal: ${modalId}`); // Replace with actual modal logic if needed
}
