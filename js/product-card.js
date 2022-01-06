var swiper = new Swiper(".cardSwiper", {
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".thumbSwiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});