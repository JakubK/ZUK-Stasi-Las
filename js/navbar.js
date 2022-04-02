const burgerActiveClass = 'burger--active';
const mobileNavActiveClass = 'navigation__links--mobile-active';

const burger = document.getElementById('burger');
const navigationLinks = document.getElementsByClassName('navigation__links')[0];

burger.addEventListener('click', () => {
  if (burger.classList.contains(burgerActiveClass)) {
    burger.classList.remove(burgerActiveClass);
    navigationLinks.classList.remove(mobileNavActiveClass);
  } else {
    burger.classList.add(burgerActiveClass);
    navigationLinks.classList.add(mobileNavActiveClass);
  }
});