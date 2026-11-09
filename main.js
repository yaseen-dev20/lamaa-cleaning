const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");

btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
});

// اقفل القايمة لما يضغط على أي لينك
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
    });
});
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));
// _____________________________
const form = document.getElementById("contact-form");

if (form) {
    const nameInput = document.getElementById("name");

    nameInput.addEventListener("input", () => {
        nameInput.classList.remove("err");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        if (!name) {
            nameInput.classList.add("err");
            nameInput.focus();
            return;
        }

        const service = document.getElementById("service").value;
        const details = document.getElementById("details").value.trim();

        let text = `السلام عليكم، أنا ${name}، وعايز أسأل عن: ${service}.`;
        if (details) text += `\n${details}`;

        const url = "https://wa.me/201004791252?text=" + encodeURIComponent(text);
        window.open(url, "_blank", "noopener");
    });
}