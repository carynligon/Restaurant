import $ from 'jquery';
import Backbone from 'backbone';
import renderMenu from './views/menu-items';
import renderOrderBox from './views/menu-order';
import renderCheckout from './views/checkout';
import renderHome from './views/home';
import renderConfirm from './views/confirm';

let data;

const Router = Backbone.Router.extend({
  routes: {
    home: 'homeFunction',
    menu: 'menuFunction',
    checkout: 'checkoutFunction',
    confirm: 'confirmFunction'
  },
  homeFunction: function () {
    $('.container').empty();
    renderHome();
  },
  menuFunction: function () {
    $('.container').empty();
    data = renderMenu();
  },
  checkoutFunction: function () {
    renderCheckout();
    console.log('checkout');
  },
  confirmFunction: function () {
    renderConfirm();
  }
});

const router = new Router();

export default router;
