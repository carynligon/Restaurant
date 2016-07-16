import $ from 'jquery';

function renderConfirm () {
  let $confirmMessage = (`
    <div class="confirm">
      <h3>Thanks!</h3>
      <span>Your order has been confirmed</span>
    </div>
    `);
  $('.container').empty().append($confirmMessage);
}

export default renderConfirm;
