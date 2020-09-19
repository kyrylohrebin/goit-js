import menuItems from '../menu.json';
import templateMenuItems from '../templates/menu-item.hbs';

const menuList = document.querySelector('.js-menu');

const listItem = templateMenuItems(menuItems);
menuList.insertAdjacentHTML('beforeend', listItem);