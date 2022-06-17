// --------------------------------
// Antigo código que deu bug e não consegui resolver
// function onScroll() {
//   scrollY > 0
//     ? navigation.classList.add('scroll')
//     : navigation.classList.remove('scroll')
// }
// -----------------------------
// Código que o Bruno me passou
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) {
    $('#navigation').addClass('scroll')
  } else {
    $('#navigation').removeClass('scroll')
  }
});

function openMenu() {
  document.body.classList.add('menu-expanded')
};

function closeMenu() {
  document.body.classList.remove('menu-expanded')
};

// function showBackToTopButtonOnScroll() {
//   if (scrollY > 550) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// };

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 550) {
    $('#backToTopButton').addClass('show')
  } else {
    $('#backToTopButton').removeClass('show')
  }
});

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img, 
#home .status, 
#services,
#services header,
#services .cards,
#about header,
#about .content`);
