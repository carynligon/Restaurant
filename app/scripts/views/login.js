import $ from 'jquery';
import router from '../router';

function renderLogin() {
  $('.container').empty();
  let $loginBox = (`
    <div class="login">
         <form class="login-form">
           <h2>Login</h2>
           <input type="text" name="username" placeholder="username" id="username"/>
           <input type="password" max-length=12 name="password" placeholder="password" id="password" />
           <input type="submit" name="submit" value="submit" id="login-btn">
         </form>
    </div>
    `);
  $('.container').append($loginBox);
  let username = 'manager';
  let password = 'password';
  $('.login').find('input[type="submit"]').on('click', function (evt) {
    evt.preventDefault();
    if ($('#username').val() === username && $('#password').val() === password) {
      router.navigate('manager', {trigger: true});
    } else {
      $('.login-form').append($(`<p>ERROR: Invalid username or password</p>`));
      $('#password').val('');
    }
  });
}

export default renderLogin;
