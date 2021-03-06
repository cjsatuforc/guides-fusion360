function header() {
    const pane1 = document.querySelector('#header');
    pane1.classList.add('card-header');
    const pane2 = document.createElement('div');
    pane2.classList.add('container');
    pane1.appendChild(pane2);
    const a = document.createElement('a');
    a.classList.add('navbar-brand');
    a.href = 'home.html?id=1';
    a.innerText = 'Гайды по Fusion 360';
    pane2.appendChild(a);
}

function footer() {
    const pane1 = document.querySelector('#footer');
    pane1.classList.add('card-footer');
    const pane2 = document.createElement('div');
    pane2.classList.add('container');
    pane1.appendChild(pane2);
    const line1 = document.createElement('span');
    line1.innerHTML = 'Данный сайт разработан студентами <a href="https://mospolytech.ru">Московского Политеха</a>.';
    pane2.appendChild(line1);
    pane2.appendChild(document.createElement('br'));
    const line2 = document.createElement('span');
    line2.innerHTML = 'Исходный код можно найти на <a href="https://github.com/BesedinAlex/guides-fusion360">Github</a>.';
    pane2.appendChild(line2);
    pane2.appendChild(document.createElement('br'));
    const line3 = document.createElement('span');
    line3.innerHTML = 'Узнать больше про Fusion 360 можно на сайте <a href="https://autodesk.com/products/fusion-360/overview">Autodesk</a>.';
    pane2.appendChild(line3);
    pane2.appendChild(document.createElement('br'));
}
