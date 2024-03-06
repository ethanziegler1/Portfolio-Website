// scroll to top functionality
const scrollUp = document.querySelector("#scroll-to-top");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const linkedIn = document.querySelector("#linked-in")
linkedIn.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})