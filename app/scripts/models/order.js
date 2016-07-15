import Backbone from 'backbone';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/caryns-cafe-orders';

const Order = Backbone.Model.extend({
  urlRoot: apiURL,
  defaults: {
    timestamp: new Date()
  }
});

export default Order;
