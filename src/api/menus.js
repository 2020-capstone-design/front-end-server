import { posts } from './index';

function fetchMenus(restaurant_num) {
  return posts.get(`/v1/menu/list_menu/${restaurant_num}`);
}

function createMenu(menuData) {
  return posts.post('v1/menu/insert_menu', menuData);
}

export { fetchMenus, createMenu };