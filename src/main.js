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
  initElementPicker();
  initTypewriter();
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
  const elements = document.querySelectorAll(".anim-on-scroll, .edu-reveal");
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

  const expCards = document.querySelectorAll(".exp-card");
  if (expCards.length) {
    const expObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    expCards.forEach((card) => expObserver.observe(card));
  }
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  let lastY = window.scrollY;
  let hideTimer = null;

  navbar.style.transition = "opacity 0.3s ease, transform 0.3s ease, background 0.3s ease";

  function show() {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";
  }

  function hide() {
    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(-100%)";
  }

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y > 40 && y > lastY) {
        hide();
        clearTimeout(hideTimer);
      } else {
        show();
      }
      lastY = y;

      if (y > 40) {
        navbar.classList.add("bg-bg-primary/80", "backdrop-blur-xl", "shadow-sm");
      } else {
        navbar.classList.remove("bg-bg-primary/80", "backdrop-blur-xl", "shadow-sm");
      }

      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        if (window.scrollY > 40) show();
      }, 150);
    },
    { passive: true }
  );
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

function initTypewriter() {
  const el = document.getElementById("about-text");
  if (!el) return;
  const text = el.dataset.text || "";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function type(start) {
    if (reduced) {
      el.textContent = text;
      return;
    }
    el.textContent = text.slice(0, start);
    if (start < text.length) {
      setTimeout(() => type(start + 1), 15);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          type(0);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(el);
}

function initElementPicker() {
  const btn = document.createElement("button");
  btn.id = "pick-btn";
  btn.textContent = "✎";
  btn.setAttribute("aria-label", "Pick element to edit");
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "9999",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#993A14",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  document.body.appendChild(btn);

  let picking = false;
  let current = null;

  const styleEl = document.createElement("style");
  styleEl.textContent =
    ".pick-hover{outline:2px solid #993A14!important;outline-offset:2px!important;}";
  document.head.appendChild(styleEl);

  function cssPath(e) {
    const parts = [];
    let node = e;
    while (node && node.nodeType === 1) {
      let s = node.tagName.toLowerCase();
      if (node.id) {
        s += "#" + node.id;
      } else {
        const cls = (node.className && typeof node.className === "string")
          ? node.className.split(/\s+/).filter(Boolean).slice(0, 2).join(".")
          : "";
        if (cls) s += "." + cls;
        const kids = node.parentNode ? node.parentNode.children : [];
        if (kids.length > 1) {
          s += ":nth-child(" + (Array.prototype.indexOf.call(kids, node) + 1) + ")";
        }
      }
      parts.unshift(s);
      node = node.parentNode;
    }
    return parts.join(" > ");
  }

  function onHover(e) {
    if (current) current.classList.remove("pick-hover");
    current = e.target;
    current.classList.add("pick-hover");
  }

  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const sel = cssPath(e.target);
    const txt = (e.target.innerText || e.target.textContent || "").trim().slice(0, 150);
    const msg = "SELECTOR:\n" + sel + "\n\nTEXT:\n" + txt;
    navigator.clipboard.writeText(sel + "\n" + txt).catch(() => {});
    alert(msg);
    picking = false;
    btn.style.background = "#993A14";
    document.removeEventListener("mouseover", onHover, true);
    document.removeEventListener("click", onClick, true);
    if (current) current.classList.remove("pick-hover");
  }

  btn.addEventListener("click", () => {
    if (picking) return;
    picking = true;
    btn.style.background = "#C44D2B";
    document.addEventListener("mouseover", onHover, true);
    document.addEventListener("click", onClick, true);
  });
}