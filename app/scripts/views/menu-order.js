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
  let tax = 0;
  $orderBox.removeClass('full-width');
  $('.container').append($orderBox);
  $('.order-box').hide();
  $('.remove').show();
  $(window).bind('scroll', function () {
    let show = $( window ).height() - 200;
    if ($(window).scrollTop() > show) {
         $('#icon-key').show();
				 $('.order-box').show();
         $('#checkout').show();
  	 } else if (location.hash === '#checkout') {
       $('#icon-key').hide();
       $('.order-box').show().addClass('full-width');
       $('#checkout').hide();
     } else {
  		 $('.order-box').hide();
       $('#icon-key').hide();
  	 }
  });
  $('.add-to-order').on('click', function(evt){
    let selectedItem = data[$(evt.target).attr('data-id') - 1];
    let $orderItem = (`
      <ul class="selected-item">
        <li><input type="button" name="remove" value="x" class="remove ${selectedItem.id}" data-id="${selectedItem.id}" /></li>
        <li class="item-name ${selectedItem.id}">${selectedItem.item}</li>
        <li class="item-price ${selectedItem.id}">$${selectedItem.price}</li>
      </ul>
      `);
    total+=selectedItem.price;
    total = Number(total);
    $('.tax').text('Tax: $' + (total * 0.08));
    $('.total-price').text('Subtotal: $' + (total * 1.08).toFixed(2));
    $('#order-list').append($orderItem);
    $('.remove').on('click', function (evt){
      let id = $(evt.target).attr('data-id');
      $(`.${id}`).hide();
    });
  });
  $('#checkout').on('click', function (){
    router.navigate('checkout', {trigger: true});
  });
}

export default renderOrderBox;
