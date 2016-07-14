import Backbone from 'backbone';

const menuAPI = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';

const MenuItem = Backbone.Model.extend({
  urlRoot: menuAPI
});

export default MenuItem;
