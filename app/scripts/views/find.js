import $ from 'jquery';

function renderFind() {
  $('.container').empty();
  let $textInfo = $(`
    <div class="contact-info">
      <p>Phone: 512-123-4567</p>
      <p>Serving Daily 7am - 7pm</p>
      <p>3614 Govalle Ave</p>
    </div>
    `);
  let $map = $(`<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.032730527897!2d-97.69969604954373!3d30.26464861500257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b67864ba16c5%3A0xb866e3659a5af650!2s3614+Govalle+Ave%2C+Austin%2C+TX+78702!5e0!3m2!1sen!2sus!4v1468703971847\" width=\"500\" height=\"250\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>`);
  $('.container').append($textInfo).append($map);
}

export default renderFind;
