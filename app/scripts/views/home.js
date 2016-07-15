import $ from 'jquery';

let $body = (`
  <div class="about">
    <h2>What we're all about...</h2>
    <p>Tote bag typewriter PBR&B selfies, hoodie neutra kombucha 90's. Crucifix lumbersexual taxidermy organic affogato ennui, 3 wolf moon hella neutra pour-over aesthetic small batch. Plaid freegan meh craft beer, jean shorts brunch before they sold out XOXO art party chambray meditation organic letterpress austin tousled. Pug everyday carry biodiesel readymade. Cronut master cleanse portland, wolf iPhone vice dreamcatcher put a bird on it street art lomo cornhole. Cardigan readymade semiotics echo park hoodie wolf skateboard truffaut lomo butcher. Hashtag leggings PBR&B fixie bespoke yuccie blog affogato, flexitarian schlitz 8-bit butcher.</p>
    <p>Drinking vinegar tousled raw denim cold-pressed, tacos fixie blue bottle next level pug readymade. Bitters seitan schlitz, tote bag photo booth letterpress bespoke viral fingerstache cornhole hella messenger bag truffaut selvage food truck. Irony affogato health goth, thundercats messenger bag jean shorts meggings banh mi. Waistcoat gochujang fingerstache wolf. DIY authentic art party pour-over. Whatever taxidermy actually, organic raw denim swag knausgaard health goth PBR&B tofu 3 wolf moon bushwick chillwave. Brooklyn shoreditch hashtag, pickled deep v thundercats VHS mumblecore butcher shabby chic austin beard.</p>
    <p>Single-origin coffee bicycle rights put a bird on it beard four dollar toast, fixie listicle truffaut 90's lomo. Ennui YOLO vinyl lumbersexual meditation bitters flannel. Letterpress keffiyeh put a bird on it neutra chia fap banjo hoodie. Meggings green juice truffaut, gentrify artisan bushwick post-ironic retro pabst tumblr hashtag freegan deep v poutine. Austin VHS bicycle rights pitchfork pour-over skateboard. Shoreditch man bun mustache seitan, distillery whatever poutine. Listicle blog thundercats crucifix offal.</p>
  </div>
  `);

function renderHome() {
  $('.container').append($body);
}

export default renderHome;
