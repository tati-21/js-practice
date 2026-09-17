// ! Після переви

// TODO задача 2.1

//todo: Користувач перейшов на сторінку «Контакти», а підсвіченим лишився пункт «Головна».

//todo: Що зробити:
//todo: Знайти поточний активний пункт (.menu .active) і зняти з нього клас active.
//todo: Знайти пункт з data-page="contacts" за селектором атрибута і додати йому клас active.
//todo: Перевірити результат через classList.contains.

// const refs = {
//   activeLink: document.querySelector(".active"),
//   contactLink: document.querySelector('[data-page="contacts"]'),
// };

// refs.activeLink.classList.remove("active");

// TODO задача 2.2
// TODO
// TODO Аналітика має дістати з картки товару його id, ціну й наявність — усе це лежить у data-атрибутах.

// TODO Що зробити:
// TODO Вивести dataset.id і зверніть увагу на тип значення.
// TODO Порахувати ціну двох таких товарів (не забудьте перетворити рядок у число).
// TODO Прочитати data-in-stock — назва властивості в dataset зміниться.
// TODO Додати новий атрибут data-viewed="true" через dataset.

// const refs = {
//   card: document.querySelector(".card"),
// };

// console.log(refs.card.dataset.id);
// console.log(Number(refs.card.dataset.price) * 2);
// console.log(refs.card.dataset.inStock);

// refs.card.dataset.viewed = "true";

// todo задача 2.3
// todo У таблиці замовлень перша колонка порожня — туди треба проставити порядкові номери.

// todo Що зробити:
// todo Знайти всі рядки в tbody.
// todo Для кожного рядка записати його порядковий номер (з 1) у перший осередок.
// todo Використати другий аргумент forEach — індекс.

// const refs = {
//   rows: document.querySelectorAll("#orders tbody tr"),
// };

// refs.rows.forEach((row, index) => {
//   row.firstElementChild;
// });

// todo задача 2.4
// todo Довгу таблицю незручно читати. Кожен парний рядок треба позначити класом striped.

// todo Що зробити:
// todo Розв'язати задачу через CSS-селектор :nth-child(even) у querySelectorAll.
// ! 2-й варіань
// todo Розв'язати її ж без псевдокласу — через індекс у forEach.
// todo У другому варіанті використати classList.toggle із другим аргументом.

// const refs = {
//   evenRows: document.querySelectorAll("report tbody tr:nth-child(even)"),
//   rows: document.querySelector("#report tbody tr"),
// };

// console.log(refs.evenRows);

// // refs.evenRows.forEach(row => {
// //     row.classList.add('striped')
// // });

// refs.rows.forEach((row, index) => {
//   row.classList.toggle("striped", index % 2 === 0);
// });

// todo задача 2.5
// todo Вимога від замовника: посилання на чужі сайти мають відкриватися окремо й не «зливати» реферер.

// todo Що зробити:
// todo Знайти всі посилання з атрибутом href.
// todo Визначити зовнішні: у них hostname не порожній і не збігається з location.hostname.
// todo Додати таким посиланням target="_blank", rel="noopener noreferrer" і клас external.
// todo Перевірити, що mailto: і внутрішні посилання лишились без змін.

// const refs = {
//   links: document.querySelectorAll(".links a"),
// };

// console.log(refs.links);
// console.log(location);

// refs.links.forEach((link) => {
//   // if (link.getAttribute('href').startWith())
//   if (link.hostname !== location.hostname) {
//     link.setAttribute("target", "_blank");
//     link.rel = "noopener noreferrer";
//     link.classList.add("external");
//   }
//   //   console.log(link.hostname);
// });

// todo задача 2.6

// todo Останній елемент навігації-ланцюжка — це поточна сторінка. Він не має бути посиланням.

// todo Що зробити:
// todo Знайти контейнер .breadcrumbs і його останню дитину.
// todo Додати їй клас current і атрибут aria-current="page".
// todo Якщо всередині є посилання — прибрати в нього атрибут href.

// const refs = {
//   nav: document.querySelector(".breadcrumbs"),
// };

// const lastChild = refs.nav.lastElementChild;

// console.log(lastChild);

// lastChild.classList.add("current");
// lastChild.ariaCurrent = "page";

// const linkEl = lastChild.querySelector("a");
// if (linkEl) {
//   linkEl.removeAttribute("href");
// }
