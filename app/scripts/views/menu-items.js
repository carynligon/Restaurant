import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import renderOrderBox from './menu-order';


const menuAPI = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';

let data = [];
  function renderMenu () {
    $.ajax({
      url: menuAPI,
      success: function(response) {
        let $menuContainer = (`
          <div class="menu">
            <ul id="icon-key"">
            <li><i class="fa fa-star fav" aria-hidden="true"></i>Local Favorite</li>
            <li><i class="fa fa-square sodium" aria-hidden="true"></i>Low Sodium</li>
            <li><i class="fa fa-square calories" aria-hidden="true"></i>Under 500 Calories</li>
          </div>
          `);
          $('.container').append($menuContainer);
        _.keys(response).forEach(function(category) {
          let $menuList = (`
            <h3>${category}</h3>
              <ul class="${category}">
              </ul>
            `);
            $('.menu').append($menuList);
          response[category].forEach(function(item){
            let $menuItem = (`
                  <li>
                    <h5>${item.item}</h5>
                    <span class="price">$${item.price}</span>
                    <span class="descriptio">${item.description}</span>
                    <ul class="item-meta-data ${item.id}-info">
                      <input type="button" name="add-to-order" class="add-to-order" data-id="${item.id}" value="Add to order" />
                    </ul>
                  </li>
              `);
              data.push(item);
            $('.' + category).append($menuItem);
            if (_.propertyOf(item)('local fav') === 1) {
              $('.' + item.id + '-info').append(`<li><i class="fa fa-star fav" aria-hidden="true"></i></li>`);
            }
            if (_.propertyOf(item)('low sodium') === 1) {
              $('.' + item.id + '-info').append(`<li><i class="fa fa-square sodium" aria-hidden="true"></i></li>`);
            }
            if (_.propertyOf(item)('under 500 cals') === 1) {
              $('.' + item.id + '-info').append(`<li><i class="fa fa-square calories" aria-hidden="true"></i></li>`);
            }
          });
        });
        renderOrderBox(data);
      }
    });
    return data;
  }





export default renderMenu;
