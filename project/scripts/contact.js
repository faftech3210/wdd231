document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("myButton");
  const closeButton = document.getElementById("closeButton");
  const menu = document.getElementById("menuLinks");

  menuButton.addEventListener("click", () => {
    menu.classList.add("show");
    menuButton.style.display = "none";
    closeButton.style.display = "block";
  });

  const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;


  closeButton.addEventListener("click", () => {
    menu.classList.remove("show");
    closeButton.style.display = "none";
    menuButton.style.display = "block";
  });
});
