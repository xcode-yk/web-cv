const CONTACT = {
  phone: "+6283836186053",
  email: "ryan.fahri03@gmail.com",
  address: "Kab. Klaten, Jawa Tengah",
};

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initHamburger();
  initScrollspy();
  initScrollReveal();
  initNavbarScroll();
  initSmoothScroll();
});

function initParticles() {
  const container = document.getElementById("particles-js");
  if (!container) return;
  if (typeof particlesJS === "undefined") return;

  particlesJS.load("particles-js", "./assets/particles.json");
}

function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

function initScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".anim-on-scroll");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-bg-primary/80", "backdrop-blur-xl", "shadow-sm");
    } else {
      navbar.classList.remove("bg-bg-primary/80", "backdrop-blur-xl", "shadow-sm");
    }
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}