
// Make the logo click and back to home
function LogoHome() {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

// Highlight the active navigation link
function highlightNavBar() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
  highlightNavBar();
  LogoHome();
});

