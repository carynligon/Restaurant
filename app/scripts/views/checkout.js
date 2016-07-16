import $ from 'jquery';
import allOrders from '../collections/orders';
import router from '../router';

function renderCheckout() {
    let items = [];
    document.querySelectorAll('.item-name').forEach(function(item) {
        items.push(item.textContent);
    });
    $('.menu').hide();
    let $checkoutForm = (`
    <form class="checkout-info">
      <input type="text" name="first-name" value="First name" id="first-name" />
      <input type="text" name="last-name" value="Last name" id="last-name" />
      <input type="tel" name="phone-number" value="Phone number" id="phone" />
      <input type="text" name="street" value="Street" id="street" />
      <input type="text" name="city" value="city" id="city" />
      <input type="text" name="zipcode" value="Zip" id="zip" />
      <input type="submit" name="submit" value="Submit" id="submit" />
    </form>
    `);
    $('.container').append($checkoutForm);
    $('#submit').on('click', function(evt) {
        evt.preventDefault();
        allOrders.create({
            name: $('#first-name').val() + ' ' + $('#last-name').val(),
            items: items,
            total: document.querySelector('.total-price').innerText.slice(7),
            phone: $('#phone').val(),
            address: $('#street').val() + ' ' + $('#city').val() + ' ' + $('#zip').val(),
        });
        router.navigate('confirm', {
            trigger: true
        });
    });
}

export default renderCheckout;
