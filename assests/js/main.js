// Author : Pranto Kumar

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*menu show*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*menu hidden*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER FAVORITES ===============*/
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto'
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true //animations repeat
})
sr.reveal('.home_data, .favorite__container .footer__container')
sr.reveal('.home__circle, .home__img', { delay: 600, scale: .5 })
sr.reveal('.home__chips-1, .home__chips-2, .home__chips-3', { delay: 1000, interval: 100 })
sr.reveal('.home__leaf', { delay: 1200 })
sr.reveal('.home__tomato-1, .home__tomato-2', { delay: 1400, interval: 100 })
sr.reveal('.care__img, .contact__img', { origin: 'left' })
sr.reveal('.care__list, .contact__data', { origin: 'right' })
sr.reveal('.banner__item, .products__card', { interval: 100 })



let lastScrollTop = 0;
    const logo = document.getElementById('logo');
    let scale = 1;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        scale = Math.max(0.5, scale - 0.05);
      } else {
        // Scrolling up
        scale = Math.min(1, scale + 0.05);
      }

      logo.style.transform = `scale(${scale})`;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
	
	const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Animate only once
    }
  });
});

document.querySelectorAll('.right-text h1, .right-text p, .benefits li').forEach(el => {
  observer.observe(el);
});

document.getElementById("dealerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your request has been submitted.");
});

function flipLogo() {
  document.querySelector('.flip-container').classList.toggle('flip');
}

