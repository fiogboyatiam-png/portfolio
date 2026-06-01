const button = document.getElementById("themeButton");
const icon = button.querySelector("i");
const year = document.getElementById("year");
const revealElements = document.querySelectorAll(".reveal");

function updateThemeIcon(isDark) {
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const isDark = savedTheme === "dark";
  document.body.classList.toggle("dark", isDark);
  updateThemeIcon(isDark);
}

button.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((element) => observer.observe(element));
year.textContent = new Date().getFullYear();
applySavedTheme();