import $ from 'jquery';
import menuItems from '../collections/menu-items';

// function renderMenu (menuItems) {
//   let $menuList = (`
//     <div class="menu">
//       <ul>
//       </ul>
//     </div>
//     `);
//   $('.container').empty().append($menuList);
//   menuItems.on('add', function (menuItem) {
//     let $menuItem = (`
//           <li>
//             <h5>${menuItem.get('item')}</h5>
//             <span class="price">${menuItem.get('price')}</span>
//             <span>${menuItem.get('description')}</span>
//             <ul class="item-meta-data">
//               <li>fav</li>
//               <li>sodium</li>
//               <li>cals</li>
//             </ul>
//           </li>
//       `);
//       $('ul').append($menuItem);
//       console.log('hi');
//   });
//   // menuItems.forEach(function (item) {
//   //   console.log('hi');
//   //
//   // });
//   return $menuList;
// }
//
// export default renderMenu;
