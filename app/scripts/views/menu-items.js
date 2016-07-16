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
                    <ul class="item-meta-data">
                      <li><i class="fa fa-star fav" aria-hidden="true"></i></li>
                      <li><i class="fa fa-square sodium" aria-hidden="true"></i></li>
                      <li><i class="fa fa-square calories" aria-hidden="true"></i></li>
                      <input type="button" name="add-to-order" class="add-to-order" data-id="${item.id}" value="Add to order" />
                    </ul>
                  </li>
              `);
              data.push(item);
            $('.' + category).append($menuItem);
          });
        });
        renderOrderBox(data);
      }
    });
    return data;
  }





export default renderMenu;
