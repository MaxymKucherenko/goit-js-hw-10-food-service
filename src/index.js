import './styles.css';
import menu from './data/menu.json';
import createMenu from './templates/menuTemplate.hbs';

const refs = {
  menuList: document.querySelector('.menu'),
  switchInput: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log('hello 15');

refs.body.classList.add(
    localStorage.getItem('theme') === null
        ? Theme.LIGHT
        : localStorage.getItem('theme')
);
refs.switchInput.checked = localStorage.getItem('theme') === Theme.DARK;

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
refs.switchInput.addEventListener('click', ChangeTheme);


function ChangeTheme(e) {
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
      return;
  } 
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
};

