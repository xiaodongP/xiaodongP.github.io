(function () {
  var busuanziSrc = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';

  function createItem(label, id) {
    var item = document.createElement('span');
    item.className = 'visitor-counter__item';

    var labelNode = document.createElement('span');
    labelNode.className = 'visitor-counter__label';
    labelNode.textContent = label;

    var valueNode = document.createElement('span');
    valueNode.className = 'visitor-counter__value';
    valueNode.id = id;
    valueNode.textContent = '-';

    item.appendChild(labelNode);
    item.appendChild(valueNode);
    return item;
  }

  function createDivider() {
    var divider = document.createElement('span');
    divider.className = 'visitor-counter__divider';
    divider.setAttribute('aria-hidden', 'true');
    return divider;
  }

  function mountCounter() {
    if (document.querySelector('.visitor-counter')) {
      return;
    }

    var counter = document.createElement('aside');
    counter.className = 'visitor-counter visitor-counter--loading';
    counter.setAttribute('aria-label', '访问统计');

    counter.appendChild(createItem('访客', 'busuanzi_value_site_uv'));
    counter.appendChild(createDivider());
    counter.appendChild(createItem('访问', 'busuanzi_value_site_pv'));
    counter.appendChild(createDivider());
    counter.appendChild(createItem('本文', 'busuanzi_value_page_pv'));

    document.body.appendChild(counter);
    loadBusuanzi(counter);
  }

  function loadBusuanzi(counter) {
    var script = document.createElement('script');
    script.async = true;
    script.src = busuanziSrc;
    script.onload = function () {
      counter.classList.remove('visitor-counter--loading');
    };
    script.onerror = function () {
      counter.classList.remove('visitor-counter--loading');
      counter.setAttribute('title', '访问统计暂时不可用');
    };

    document.body.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountCounter);
  } else {
    mountCounter();
  }
})();
