// mobile nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click',() =>{
    console.log('entro ', navOpenedClass)
    console.log('entro ', navClosedClass)
    if(mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }

});

// swiper
const swiper = new Swiper('.swiper',{
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
});


// faq
const faqItems =document.querySelectorAll('.faq__item');

faqItems.forEach((item)=>{
    const faqBtn = item.querySelector('.faq__btn')

    item.addEventListener('click', ()=>{
        const isOpen = item.classList.toggle('open');
        const iconClass= isOpen ? 'ri-subtract-fill':'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList=`${iconClass} text-2xl`;
    })
})


// scroll reveal animations
const sr =ScrollReveal({
    origin:'botton',
    distance:'60px',
    duration:3000,
    delay:600,
    //reset:true,     //resets animation

});

//hero
sr.reveal('.hero__text', {origin:'top'});
sr.reveal('.hero__img');

//starts
sr.reveal('.stats__item', {delay:600, distance:'100px', interval:100, origin:'top'});

//services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {delay:600, distance:'100px', interval:100, origin:'botton'});

//appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonial
sr.reveal('.testimonial');
sr.reveal('.testimonial__constainer');

//team
sr.reveal('.team__title');
sr.reveal('.team__slider');

//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {delay:600, distance:'100px', interval:100, origin:'botton'});

//departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {delay:600, distance:'100px', interval:100, origin:'botton'});

//brands
sr.reveal('.brands__logo', {delay:600, distance:'100px', interval:100, origin:'botton'});

//departments
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

//footer
sr.reveal('.item__footer', {delay:600, distance:'100px', interval:100, origin:'botton'});


