// navbar scrolled start
let nav = document.querySelector(".navbar");

if (nav) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  };
}
// navbar scrolled end



// swiper bullets start
document.addEventListener("DOMContentLoaded", function () {
  // Select all Swiper pagination bullets
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");

  bullets.forEach(bullet => {
    // Set default background color
    bullet.style.backgroundColor = "#A9A9A9";

    // Add click event listener to each bullet
    bullet.addEventListener("click", function () {
      // Remove active styles from all bullets
      bullets.forEach(b => {
        b.style.backgroundColor = "#A9A9A9";
        b.style.padding = "0"; // Reset padding
      });

      // Add active styles to clicked bullet
      this.style.backgroundColor = "#B88E2F";
      this.style.padding = "5px";
    });
  });

  // Set initial active bullet (if any)
  const activeBullet = document.querySelector(".swiper-pagination-bullet-active");
  if (activeBullet) {
    activeBullet.style.backgroundColor = "#B88E2F";
    activeBullet.style.padding = "5px";
  }
});
// swiper bullets end



// cart.html img slider start
function imgGallery() {
    const mainImg = document.querySelector('.details_img');
    const smallImg = document.querySelectorAll('.details_small-img');
    
    smallImg.forEach((img) => {
        img.addEventListener('click', function(){
        mainImg.src = this.src;
        })
    });
 }
    
imgGallery();


// increment-decrement-sec start
let counter = 1;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
    decrementButton.classList.remove("disabled"); // Enable decrement button
});

decrementButton.addEventListener("click", () => {
    if (counter > 1) {
        counter--;
        counterElement.textContent = counter;
        if (counter === 1) {
            decrementButton.classList.add("disabled"); // Disable if 1
        }
    }
});
// increment-decrement-sec end
// cart.html slider end