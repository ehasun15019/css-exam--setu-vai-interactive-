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