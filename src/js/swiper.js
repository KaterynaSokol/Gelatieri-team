const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
   spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
