import $ from 'jquery';
import allOrders from '../collections/orders';
import Backbone from 'backbone';
import _ from 'underscore';
import moment from 'moment';

function renderManagerView() {
  let $orderContainer = $(`
    <h6>All Orders</h6>
    <ul id="all-orders">
    </ul>
    `);
  $('.container').empty().append($orderContainer);
  allOrders.fetch({
    success: function (response) {
      response.forEach(function(order) {
        let singleOrder = order.attributes;
        let $orderListItem = $(`
          <ul class="single-item">
            <li>Name: ${singleOrder.name}</li>
            <li>Timestamp: ${moment(new Date(singleOrder.timestamp)).fromNow()}</li>
            <li>Items Ordered: ${singleOrder.items}</li>
            <li>Total: ${singleOrder.total}</li>
            <li>Phone: ${singleOrder.phone}</li>
            <li>Address: ${singleOrder.address}</li>
            <li>Complete <input type="checkbox" class="checkbox" data-id="${singleOrder._id}"/></li>
          </ul>
          `);
        $('#all-orders').append($orderListItem);
      });
      $('.checkbox').on('click', function(evt) {
        let id = $(evt.target).attr('data-id');
        let completedOrder = allOrders.where({
          _id: id
        });
        allOrders.set(completedOrder, {
          complete: 1
        });
        console.log(allOrders);
      });
    }
  });
}

export default renderManagerView;
