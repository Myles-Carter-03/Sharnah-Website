// Dark Mode

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

// Scroll Animations

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up").forEach(el=>{
    observer.observe(el);
});