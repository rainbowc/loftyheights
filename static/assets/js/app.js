const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => (slide.style.opacity = 0));
  slides[slideIndex].style.opacity = 1;
  slides.forEach((slide, index) => {
    // If the current slide matches the index, remove 'hidden', otherwise, add 'hidden'
    slide.classList.toggle('hidden', index !== slideIndex);
  });
}

let slideInterval = setInterval(nextSlide, 1500000);
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  updateSlideIndicator();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  updateSlideIndicator();
}

function updateSlideIndicator() {
  const prevIndicator = document.querySelector(".prev-indicator");
  const nextIndicator = document.querySelector(".next-indicator");
  prevIndicator.textContent = `${currentSlide + 1}/3`;
  nextIndicator.textContent = `${((currentSlide + 2) % 3) + 1}/3`;
}

// Initial slide display and indicator setup
updateSlideIndicator();
showSlide(currentSlide);

// Button event listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// scrooll to top
const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show button after scrolling down a bit
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// get current year for footer
const currentYearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;
