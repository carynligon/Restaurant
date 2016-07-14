import $ from 'jquery';
import Backbone from 'backbone';
import MenuItem from '../models/menu-item';
import _ from 'underscore';

const menuAPI = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';

// function getItems () {
  const MenuItems = Backbone.Collection.extend({
    url: menuAPI,
    model: MenuItem
  });
  let menuItems = new MenuItems();

  $.ajax({
    url: menuAPI,
    success: function(response) {
      console.log('tests');
      let grouped = _.groupBy(response);
      menuItems.add(_.flatten(_.toArray(grouped)));
    }
  });
//   return menuItems;
// }



export default menuItems;
// export default getItems;
