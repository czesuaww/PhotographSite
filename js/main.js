let $nav;
let $burgerBtn;
let $allNavItems;


const prepareDOMElemets = () => {
    $nav = document.querySelector('.nav');
    $burgerBtn = document.querySelector('.burger-btn');
    $allNavItems = document.querySelectorAll('.nav__item');
}


const prepareDOMEvents = () => {
    
    const handleNav = () =>{
        $nav.classList.toggle('nav--active');
    
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
    
    $burgerBtn.addEventListener('click', handleNav);
    window.addEventListener('load', AOS.refresh);
};


const main = () => {
    prepareDOMElemets();
    prepareDOMEvents();
};

document.addEventListener('DOMContentLoaded', main);
