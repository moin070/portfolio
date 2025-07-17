document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Typing animation for logo
  const logoText = "Welcome To My portfolio";
  const logoElement = document.getElementById("logo-text");
  let index = 0;

  function typeNextLetter() {
    if (index < logoText.length) {
      logoElement.textContent += logoText[index];
      index++;
      setTimeout(typeNextLetter, 100);
    }
  }

  typeNextLetter();

  // ✅ Close mobile nav when a link is clicked
  const navLinkItems = document.querySelectorAll("#nav-links a");
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

// Image modal functions
window.openModal = function (img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
};

window.closeModal = function () {
  document.getElementById("imageModal").style.display = "none";
};

// skills section

// Animate fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

//for project section
function openModal(imgElement) {
  const modal = document.getElementById("img-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  document.getElementById("img-modal").style.display = "none";
}


// for certificate

function openCertModal(imgElement) {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-modal-img");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeCertModal() {
  document.getElementById("cert-modal").style.display = "none";
}


// for contact 

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
});


// for footer 
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

