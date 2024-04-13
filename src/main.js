'use strict';

document
  .querySelector('.header-menu-btn')
  .addEventListener('click', function () {
    document.querySelector('.backdrop').classList.toggle('is-open');
  });

document
  .querySelector('.menu-close-btn')
  .addEventListener('click', function () {
    document.querySelector('.backdrop').classList.remove('is-open');
  });
