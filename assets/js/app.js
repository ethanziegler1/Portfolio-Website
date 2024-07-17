const sections = document.querySelectorAll('.section');
const buttonContainer = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    //Button click active class
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Sections active class
    allSections[0].addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

PageTransitions();