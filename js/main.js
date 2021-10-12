let $nav;
let $burgerBtn;
let $allNavItems;
let $navBtnBars;
let $allSections;
let $footerYear;

const prepareDOMElemets = () => {
    $nav = document.querySelector('.nav');
    $burgerBtn = document.querySelector('.burger-btn');
    $allNavItems = document.querySelectorAll('.nav__item');
    $navBtnBars = document.querySelector('.burger-btn__bars')
    $allSections = document.querySelectorAll('.section')
    $footerYear = document.querySelector('.footer__year')
}


const prepareDOMEvents = () => {
    
    const handleNav = () =>{
        $nav.classList.toggle('nav--active');
        $navBtnBars.classList.remove('black-bars-color');
        $allNavItems.forEach(item =>{
            item.addEventListener('click', () =>{
                $nav.classList.remove('nav--active');
            })
        })
    
        handleNavItemsAnimation();
    };
    
    
    const handleNavItemsAnimation = () => {
        let deleyTime = 0;
    
        $allNavItems.forEach(item => {
            item.classList.toggle('nav-items-animation');
            item.style.animationDelay = '.' + deleyTime + 's';
            deleyTime++;
        });
    }

    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        $footerYear.innerText = year;
    }

    const handleObserver = () =>{
        const currentSection = window.scrollY;

        $allSections.forEach(section =>{
            if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
                $navBtnBars.classList.add('black-bars-color');
            }else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
                $navBtnBars.classList.remove('black-bars-color');
            }
        });
    }


    handleCurrentYear();
    window.addEventListener('scroll',handleObserver);

    $burgerBtn.addEventListener('click', handleNav);
    window.addEventListener('load', AOS.refresh);
   
};


const main = () => {
    prepareDOMElemets();
    prepareDOMEvents();
};

document.addEventListener('DOMContentLoaded', main);
