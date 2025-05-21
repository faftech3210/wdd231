document.addEventListener("DOMContentLoaded", function () {
    // Responsive Navigation Menu
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // Dynamic Copyright Year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Document Last Modified Date
    document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

    // Course List Array
    const courses = [
        { code: "WDD 130", credits:2, completed: true },
        { code: "WDD 231", credits:3, completed: false },
        { code: "WDD 131", credits:3, completed: false },
        { code: "CSE 210", credits:2,completed: true },
        { code: "GS170", credits:1, completed: true },
        { code: "MATH108X.013", credits:3,completed:false},
        { code: "CSEPC 110", credits:2, completed: true},
        { code: "PC101", credits:3, completed: true},
        { code: "PC102", credits:3, completed: true},
        { code: " PC103", credits:2, completed: true },
    ];

    const courseContainer = document.getElementById("courseContainer");
    const totalCreditsElement = document.getElementById("totalCredits");

    function displayCourses(courseList) {
        courseContainer.innerHTML = "";
        let totalCredits = 0;

        courseList.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.classList.add(course.completed ? "course-completed" : "course-not-completed");
            courseCard.innerHTML = `<strong>${course.code}</strong>: (${course.credits} credits)`;
            courseContainer.appendChild(courseCard);

            totalCredits += course.credits;
        });

        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    displayCourses(courses);

    // Course Filtering
    document.getElementById("allCourses").addEventListener("click", () => displayCourses(courses));
    document.getElementById("wddCourses").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("WDD"))));
    document.getElementById("cseCourses").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("CSE"))));
});
