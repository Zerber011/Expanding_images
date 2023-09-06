/* Just need is to by clicking change 'active' class */

const images = document.querySelectorAll(".img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    removeActive();
    
    img.classList.add("active");
    });
});


function removeActive() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  }
