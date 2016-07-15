import $ from 'jquery';
import renderMenu from './menu-items';
import _ from 'underscore';

let $orderBox = $(`
  <div class="order-box">
    <ul id="order-list">
    </ul>
    <span class="tax">Tax: $0</span>
    <span class="total-price">Total: $0</span>
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
    total = (total + tax);
    $('.total-price').text('Total: $' + total.toFixed(2));
    $('#order-list').append($orderItem);
  });
}

export default renderOrderBox;
