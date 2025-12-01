// ========== MOBILE NAVIGATION ==========

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const navList = navMenu.querySelector(".nav-links");
    if (navList) {
      navList.classList.toggle("show");
      hamburger.classList.toggle("open");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navList = navMenu.querySelector(".nav-links");
      if (navList) {
        navList.classList.remove("show");
        hamburger.classList.remove("open");
      }
    });
  });
}

// ========== ACTIVE NAV LINK ON SCROLL ==========

const sections = document.querySelectorAll("section[id]");

function setActiveNav() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add("active");
    } else {
      if (navLink) navLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// ========== ON-SCROLL REVEAL ANIMATION ==========

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ========== CONTACT FORM STATUS MESSAGE (FRONT-END ONLY) ==========

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", () => {
    formStatus.textContent = "Sending your message...";
  });
}

// ========== FOOTER YEAR ==========

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========== SCROLL TO TOP BUTTON ==========

const scrollTopBtn = document.getElementById("scrollTopBtn");

function handleScrollTopBtn() {
  if (!scrollTopBtn) return;
  if (window.scrollY > 350) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", handleScrollTopBtn);

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
