import Swiper, {Navigation, Pagination} from 'swiper';

  document.addEventListener('DOMContentLoaded', function () {            
    document.querySelectorAll('.slider-reviews').forEach(item => {                                
        let currentNavigation = document.querySelector(`.slider-navigation-reviews`);                     
        let navigation = {};
        let pagination = {};                       
        if (currentNavigation) {
            let next = currentNavigation.querySelector('.slider-next');                
            let prev = currentNavigation.querySelector('.slider-prev');                
            navigation = {
                nextEl: next,
                prevEl: prev,
            },
            pagination = {
                el: currentNavigation.querySelector('.slider-pagination'),
                type: 'bullets',
                dynamicBullets: true,
                dynamicMainBullets: 1,
            };                 
        }
        if(item.querySelectorAll('.swiper-slide').length < 5){
            currentNavigation.querySelector('.slider-pagination').classList.add('justify-content-center');
        } 
        new Swiper(item, {
            modules: [Navigation, Pagination],
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: navigation,
            pagination: pagination,                
            slideActiveClass: "active",            
        });
    });
                      
})    