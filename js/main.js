const anchors = document.querySelectorAll('a._anchor');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const menuBtn = document.querySelector('.toggle-menu');

menuBtn.addEventListener('click', function (e) {
  menuBtn.classList.toggle('active');
  const menu = document.querySelector('.nav .menu');
  menu.classList.toggle('toggle');
  
  if (menu.classList.contains('toggle')) {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('filter');

  } else {
    document.body.classList.remove('filter');
    document.body.style.overflow = '';
  }

});