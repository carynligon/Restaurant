import $ from 'jquery';
import Backbone from 'backbone';
import renderMenu from './views/menu-items';
import renderOrderBox from './views/menu-order';

let data;

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
    data = renderMenu();
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
