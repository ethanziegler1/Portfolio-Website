const scrollUp = document.querySelector("#scroll-to-top");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });