/* ==========================================================
   Code for Change UK: website behaviour
   ========================================================== */

// Mobile menu: show and hide the navigation on small screens
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

// Home page editor: type the first line of code, then show the result
const typed = document.querySelector("#typed");
const rendered = document.querySelector("#rendered");

if (typed && rendered) {
  const text = typed.dataset.text;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    typed.textContent = text;
    rendered.classList.add("is-visible");
  } else {
    let i = 0;
    const typeNext = function () {
      typed.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(typeNext, 85);
      } else {
        setTimeout(function () { rendered.classList.add("is-visible"); }, 300);
      }
    };
    setTimeout(typeNext, 600);
  }
}
