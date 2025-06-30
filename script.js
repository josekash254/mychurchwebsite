const phrases =[
    "welcome to heaven forever church",
    "we are glad you are here",
    "join us for powerful worship",
    "experience God's presence"
];
let currentPhrase =0;
let currentLetter=0;
let isDeleting = false;

function type() {
    const textElement =
document.getElementById("typing-text");const fullText = phrases[currentPhrase];

    if (isDeleting) {currentLetter--;}
    else{currentLetter++;}

    textElement.innerText =fullText.substring(0, currentLetter);

    if(!isDeleting && currentLetter === fullText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    }else if (isDeleting && currentLetter ===0){
        isDeleting = false;
        currentPhrase = (currentPhrase+ 1)% phrases.length;
        setTimeout(type,500);}
        else{
        setTimeout(type, isDeleting ? 50 :100);
        }
}

type();


function toggleMenu(){
    const nav =
document.getElementById('nav-links');
    nav.classList.toggle('show');
}
window.addEventListener("scroll",function()
    {
        const navbar =document.querySelector(".simple-header");
        if (window.scrollY > 50) {
            simple-header.style.background = "rgba(0, 0, 0, 0.85)";
            simple-header.style.box-shadow ="o 2px 10px rgba(0,0,0,0.3";
        } else {
            simple-header.background ="tranparent";
            simple-header.boxshadow="none";
        }
    })
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.dataset.full || img.src;
      captionText.textContent = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});
// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Scroll effect on navbar
window.addEventListener("scroll", function () {
  const navbay = document.querySelector(".simple-header");
  if (window.scrollY > 50) {
    navbay.style.background = "rgba(0, 0, 0, 0.85)";
    navbay.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbay.style.background = "transparent";
    navbay.style.boxShadow = "none";
  }
});
