import $ from 'jquery';
import Backbone from 'backbone';
import renderMenu from './views/menu';
import menuItems from './collections/menu-items';

const Router = Backbone.Router.extend({
  routes: {
    home: 'homeFunction',
    menu: 'menuFunction',
    order: 'orderFunction',
    checkout: 'checkoutFunction'
  },
  homeFunction: function () {
    console.log('home');
  },
  menuFunction: function () {
    console.log(menuItems);
    let $menuList = renderMenu(menuItems);
  },
  orderFunction: function () {
    console.log('order');

  },
  checkoutFunction: function () {
    console.log('checkout');

  }
});

const router = new Router();

export default router;
