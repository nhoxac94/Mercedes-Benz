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
