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

  function renderMenu () {
    console.log('hi');
    $.ajax({
      url: menuAPI,
      success: function(response) {
        _.keys(response).forEach(function(category) {
          let $menuList = (`
            <div class="menu">
            <h3>${category}</h3>
              <ul class="${category}">
              </ul>
            </div>
            `);
            $('.container').append($menuList);
          response[category].forEach(function(item){
            console.log(item.item);
            let $menuItem = (`
                  <li>
                    <h5>${item.item}</h5>
                    <span class="price">${item.price}</span>
                    <span>${item.description}</span>
                    <ul class="item-meta-data">
                      <li>fav</li>
                      <li>sodium</li>
                      <li>cals</li>
                    </ul>
                  </li>
              `);
              console.log(category);
            $('.' + category).append($menuItem);
          });
        });
        // let grouped = _.groupBy(response);
        // menuItems.add(_.flatten(_.toArray(grouped)));
      }
    });
  }

//   return menuItems;
// }



export default renderMenu;
// export default getItems;
