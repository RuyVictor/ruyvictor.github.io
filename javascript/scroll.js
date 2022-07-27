window.sr = new ScrollReveal({ duration: 1000, reset: true });

setTimeout(() => ScrollReveal().delegate(), 500); // solve flicker bug
// home

sr.reveal(".nav-desktop", {
  distance: "40px",
  origin: "right",
  reset: false,
});

sr.reveal(".presentation-box", {
  distance: "40px",
  origin: "left",
});

sr.reveal(".header-sub-title-1", {
  distance: "80px",
  origin: "right",
});

// About

sr.reveal(".about-box span", {
  distance: "40px",
  origin: "left",
});

// skills

sr.reveal(".single-skill-box:nth-child(odd)", {
  distance: "40px",
  origin: "left",
});

sr.reveal(".single-skill-box:nth-child(even)", {
  distance: "40px",
  origin: "right",
});

// projects

sr.reveal(".single-skill-box:nth-child(odd)", {
  distance: "40px",
  origin: "left",
});

sr.reveal(
  ".single-project-box",
  {
    distance: "40px",
    origin: "left",
    interval: 200,
  },
  800
);

// contact

sr.reveal(".email-contact", {
  distance: "40px",
  origin: "top",
});

sr.reveal(".contact-form", {
  distance: "40px",
  origin: "bottom",
  delay: 300,
});
