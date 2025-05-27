document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.getElementById("spotlight-container");
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    const menunav = document.getElementById(".nav-bar");
    const handbutton = document.querySelector("#menu");

    // Toggle Navigation Menu on Hamburger Click
    handbutton.addEventListener("click", () => {
        menunav.classList.toggle("show");
        handbutton.classList.toggle("show");
    });

    // Fetch member data from JSON file
    fetch("members.json")
        .then(response => response.json())
        .then(data => {
            // Function to generate Grid View (box layout with images)
            function generateGridView() {
                return data.map(member => `
                    <div class="spotlight-card">
                        <div class="card-header">
                            <h3>${member.name}</h3>
                        </div>
                        <hr>
                        <div class="card-footer">
                            <img src="${member.logo}" alt="${member.name}">
                            <p>Email: ${member.email}</p>
                            <p>Level: ${member.level}</p>
                            <p>Phone: ${member.phone}</p>
                            <a href="${member.website}" target="_blank">Visit Website</a>
                        </div>
                    </div>
                `).join("");
            }

            // Function to generate List View (structured like the image)
            function generateListView() {
                return `
                    <table class="list-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Level</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map(member => `
                                <tr>
                                    <td>${member.name}</td>
                                    <td>${member.email}</td>
                                    <td>${member.level}</td>
                                    <td>${member.phone}</td>
                                    <td><a href="${member.website}" target="_blank">Details</a></td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                `;
            }

            // Default View: Grid Layout
            spotlightContainer.classList.add("grid-view");
            spotlightContainer.innerHTML = generateGridView();

            // Event Listener for Grid View
            gridButton.addEventListener("click", () => {
                spotlightContainer.classList.remove("list-view");
                spotlightContainer.classList.add("grid-view");
                spotlightContainer.innerHTML = generateGridView();
            });

            // Event Listener for List View (Table format like image)
            listButton.addEventListener("click", () => {
                spotlightContainer.classList.remove("grid-view");
                spotlightContainer.classList.add("list-view");
                spotlightContainer.innerHTML = generateListView();
            });
        })
        .catch(error => console.error("Error fetching members:", error));

    // Display last modification date
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
