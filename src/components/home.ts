import m from 'mithril';

function view() {
    return (
    <div>

<nav class="db dt-l w-100 border-box pa3 ph5-l">
  <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
    <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name" />
  </a>
  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blah">Blah</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Press</a>
    <a class="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Contact</a>
  </div>
</nav>




<div class="cf">
  <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
    <h1>Nachrichten</h1>
        <div>hallo</div>
    
  </div>
  <div class="fl w-100 w-20-ns tc pv5 bg-black-10">
    Ratgeber
  </div>
  <div class="fl w-100 w-20-ns tc pv5 bg-black-20">
    Sport
  </div>
  <div class="fl w-100 w-20-ns tc pv5 bg-black-10">
    Kultur
  </div>
  <div class="fl w-100 w-20-ns tc pv5 bg-black-05">
    Unterhaltung
  </div>
</div>
</div>
    );
}

export const Home = { view };