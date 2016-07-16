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
  $orderBox.removeClass('full-width');
  $('.container').append($orderBox);
  $('.order-box').hide();
  $(window).bind('scroll', function () {
    let show = $( window ).height() - 200;
    if ($(window).scrollTop() > show) {
				 $('.order-box').show();
  	 } else if (location.hash === '#checkout') {
       $('.order-box').show().addClass('full-width');
     } else {
  		 $('.order-box').hide();
  	 }
  });
  $('.add-to-order').on('click', function(evt){
    let selectedItem = data[$(evt.target).attr('data-id') - 1];
    let $orderItem = (`
      <li class="item-name ${selectedItem.id}">${selectedItem.item}</li>
      <li class="item-price ${selectedItem.id}">${selectedItem.price}</li>
      <input type="button" name="remove" value="remove" class="remove ${selectedItem.id}" data-id="${selectedItem.id}" />
      `);
    total+=selectedItem.price;
    let tax = total * 0.08;
    $('.tax').text('Tax: $' + tax.toFixed(2));
    total = (Number(total) + Number(tax));
    $('.total-price').text('Total: $' + total.toFixed(2));
    $('#order-list').append($orderItem);
    $('.remove').on('click', function (evt){
      let id = $(evt.target).attr('data-id');
      $(`.${id}`).hide();
    });
  });
  total = $('.total-price').val();
  $('#checkout').on('click', function (){
    router.navigate('checkout', {
    trigger: true
});
  });
}

export default renderOrderBox;
