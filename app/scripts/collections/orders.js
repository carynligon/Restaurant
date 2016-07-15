import Backbone from 'backbone';
import Order from '../models/order';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/caryns-cafe-orders';

const AllOrders = Backbone.Collection.extend({
  url: apiURL,
  model: Order
});

let allOrders = new AllOrders();

export default allOrders;
