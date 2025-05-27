document.addEventListener("DOMContentLoaded", () => {
    // Display Last Modified Date
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
    const apiKey = "1b475f9fc3b609d626f64f038df1cf01"; // Replace with your valid key


    // Fetch Weather Data
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}")
        .then(response => response.json())
        .then(data => {
            // Update current weather
            document.getElementById("temperature").textContent = data.list[0].main.temp;
            document.getElementById("weather-description").textContent = data.list[0].weather[0].description;

            // Update 3-day forecast
            let forecastHTML = "";
            for (let i = 1; i <= 3; i++) {
                forecastHTML += `<li>Day ${i}: ${data.list[i * 8].main.temp}°C - ${data.list[i * 8].weather[0].description}</li>`;
            }
            document.getElementById("forecast").innerHTML = forecastHTML;
        });

    // Load Random Business Spotlights
    fetch("members.json")
        .then(response => response.json())
        .then(data => {
            // Filter only Gold and Silver members
            const filteredMembers = data.filter(member => member.level === "Gold" || member.level === "Silver");
            // Randomly select 2 or 3 members
            const randomSpotlights = filteredMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
            
            let spotlightHTML = "";
            randomSpotlights.forEach(member => {
                spotlightHTML += `
                    <div class="spotlight-card">
                        <div class="card-header">
                            <h3>${member.name}</h3>
                        </div>
                        <hr>
                        <div class="card-footer">
                            <img src="${member.logo}" alt="${member.name}">
                            <p>Email: ${member.email}</p>
                            <p>Phone: ${member.phone}</p>
                            <a href="${member.website}" target="_blank">Visit Website</a>
                        </div>
                     </div>`;
            });
            document.getElementById("spotlight-container").innerHTML = spotlightHTML; 
        });
});
