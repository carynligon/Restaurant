import $ from 'jquery';
import allOrders from '../collections/orders';
import router from '../router';

function renderCheckout() {
    let items = [];
    document.querySelectorAll('.item-name').forEach(function(item) {
        items.push(item.textContent);
    });
    let requests = [];
    document.querySelectorAll('.requests').forEach(function(item) {
        items.push(item.textContent);
    });
    $('.menu').hide();
    $('.remove').hide();
    let $checkoutForm = (`
    <form class="checkout-info">
      <input type="text" name="first-name" placeholder="First name" id="first-name" />
      <input type="text" name="last-name" placeholder="Last name" id="last-name" />
      <input type="tel" name="phone-number" placeholder="Phone number" id="phone" />
      <input type="text" name="street" placeholder="Street" id="street" />
      <input type="text" name="city" placeholder="city" id="city" />
      <input type="text" name="zipcode" placeholder="Zip" id="zip" />
      <input type="submit" name="submit" value="Submit" id="submit" />
    </form>
    `);
    let $confirmTitle = $(`
      <h6>Please confirm your order</h6>
      `);
    $('.container').prepend($confirmTitle);
    $('.container').append($checkoutForm);
    $('#submit').on('click', function(evt) {
        evt.preventDefault();
        allOrders.create({
            name: $('#first-name').val() + ' ' + $('#last-name').val(),
            items: items,
            total: document.querySelector('.total-price').innerText.slice(10),
            phone: $('#phone').val(),
            address: $('#street').val() + ' ' + $('#city').val() + ' ' + $('#zip').val(),
            specialRequests: requests,
            complete: 0
        });
        router.navigate('confirm', {
            trigger: true
        });
    });
}

export default renderCheckout;
