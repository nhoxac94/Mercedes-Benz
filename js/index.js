function renderItems(classNames, destination) {
  let html = '';

  for (let i = 1; i <= 32; i++) {
    if (i == 4 || i == 5 || i == 21 || i == 20 || i == 28) {
      html += `<div class="${classNames}">
      <a href="#">
        <img src="./img/news${i}.jpeg" alt="news${i}">
        <div class="news__overlay">
            <h4>Mercedes-EQ Formula E Team.</h4>
            <p>In our new video series, INSIDE AMG, Product Manager Felix Schönhofer meets
                talented
                Mercedes-AMG experts.</p>
        </div>
      </a>
  </div>`;
    } else {
      html += `<div class="${classNames}">
      <a href="#">
        <img src="./img/news${i}.webp" alt="news${i}">
        <div class="news__overlay">
            <h4>Mercedes-EQ Formula E Team.</h4>
            <p>In our new video series, INSIDE AMG, Product Manager Felix Schönhofer meets
                talented
                Mercedes-AMG experts.</p>
        </div>
      </a>
  </div>`;
    }
  }

  destination.innerHTML = html;
}
renderItems(
  'news__item news__item--news',
  document.getElementsByClassName('news__grid--news')[0]
);
renderItems(
  'news__item news__item--popular',
  document.getElementsByClassName('news__grid--popular')[0]
);
renderItems(
  'news__item news__item--videos',
  document.getElementsByClassName('news__grid--videos')[0]
);

let initItems = document.getElementsByClassName('news__item');
for (let i = 0; i < initItems.length; i++) {
  if (i % 32 == 0 && i / 32 <= 3) {
    i = i + 14;
  }
  const e = initItems[i];
  e.classList.add('d-none');
}

function onNewsClick(section, btnName) {
  let items = document.getElementsByClassName(section);

  if (items.length >= 14) {
    for (let i = 14; i < items.length; i++) {
      const e = items[i];
      e.classList.remove('d-none');
      e.classList.add('shown');
    }
    let btn = document.getElementsByClassName(btnName)[0];
    btn.classList.add('d-none');
  }
}
