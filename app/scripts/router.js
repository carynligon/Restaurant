import $ from 'jquery';
import Backbone from 'backbone';
import renderMenu from './views/menu-items';
import renderOrderBox from './views/menu-order';
import renderCheckout from './views/checkout';
import renderHome from './views/home';

let data;

const Router = Backbone.Router.extend({
  routes: {
    home: 'homeFunction',
    menu: 'menuFunction',
    order: 'orderFunction',
    checkout: 'checkoutFunction'
  },
  homeFunction: function () {
    $('.container').empty();
    renderHome();
  },
  menuFunction: function () {
    $('.container').empty();
    data = renderMenu();
  },
  orderFunction: function () {
    console.log('order');

  },
  checkoutFunction: function () {
    renderCheckout();
    console.log('checkout');
  }
});

const router = new Router();

export default router;
