(function () {
  function createItem(label) {
    var item = document.createElement('span');
    item.className = 'visitor-counter__item';

    var labelNode = document.createElement('span');
    labelNode.className = 'visitor-counter__label';
    labelNode.textContent = label;

    var valueNode = document.createElement('span');
    valueNode.className = 'visitor-counter__value';
    valueNode.textContent = '待启用';

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
    counter.className = 'visitor-counter visitor-counter--pending';
    counter.setAttribute('aria-label', '访问统计');
    counter.setAttribute('title', '访问统计功能暂未启用');

    counter.appendChild(createItem('访客'));
    counter.appendChild(createDivider());
    counter.appendChild(createItem('访问'));
    counter.appendChild(createDivider());
    counter.appendChild(createItem('本文'));

    document.body.appendChild(counter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountCounter);
  } else {
    mountCounter();
  }
})();
