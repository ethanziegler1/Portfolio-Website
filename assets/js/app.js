const sections = document.querySelectorAll(".section");
const buttonContainer = document.querySelectorAll(".nav-btn-container");
const sectionBtn = document.querySelectorAll(".nav-btn");
const allSections = document.querySelectorAll(".main-content");
const ldButton = document.querySelectorAll(".ld-button");
const ldBtn = document.querySelectorAll(".ld-btn");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      let currBtn = document.querySelectorAll(".active-nav-btn");
      currBtn[0].className = currBtn[0].className.replace("active-nav-btn", "");
      this.className += " active-nav-btn";
    });
  }

  //Sections active class
  allSections[0].addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //ld-button switches body to light mode
  ldButton[0].addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    //toggle 'fa-sun' and 'fa-moon' icons with light and dark mode
    ldBtn[0].classList.toggle("fa-moon");
    ldBtn[0].classList.toggle("fa-sun");
  });
}

PageTransitions();
