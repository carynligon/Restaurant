import $ from 'jquery';
import renderMenu from './menu-items';
import _ from 'underscore';
import renderCheckout from './checkout';
import router from '../router';

let $orderBox = $(`
  <div class="order-box">
    <ul id="order-list">
    </ul>
    <span class="tax">Tax: $0</span>
    <span class="total-price">Total: $0</span>
    <input type="button" name="checkout" id="checkout" value="Checkout" />
  </div>
  `);

function renderOrderBox (data) {
  let total = 0;
  $('.container').append($orderBox);
  $('.add-to-order').on('click', function(evt){
    let selectedItem = data[$(evt.target).attr('data-id') - 1];
    let $orderItem = (`
      <li class="item-name">${selectedItem.item}</li>
      <li class="item-price">${selectedItem.price}</li>
      `);
    total+=selectedItem.price;
    let tax = total * 0.08;
    $('.tax').text('Tax: $' + tax.toFixed(2));
    total = (Number(total) + Number(tax));
    $('.total-price').text('Total: $' + total.toFixed(2));
    $('#order-list').append($orderItem);
  });
  total = $('.total-price').val();
  $('#checkout').on('click', function (){
    router.navigate('checkout', {trigger: true});
  });
}

export default renderOrderBox;
