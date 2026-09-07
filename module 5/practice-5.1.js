// TODO меп;

// function changeCity(user, city) {
//   const newUser = { ...user, address: { city } };
//   return newUser;
// }

// console.log(changeCity(user, 'Львів'));

// console.log(books.map(() => {}));

// function map(callback) {
//   const newArray = [];

//   for (let i = 0; i < books.length; i++) {
//     const result = callback(books[i], i, books);
//     newArray.push(result);
//   }

//   return newArray;
// }

// const books = [
//   { title: 'The Last Kingdom', rating: 8 },
//   { title: 'The Mist', rating: 6 },
// ];

// function myFunc(elem, idx, arr) {
//   console.log(elem);
// }

// TODO фільтр;
// console.log(books.filter(myFunc));

// function filter(asdfasdfdas) {
//   const newArray = [];

//   for (let i = 0; i < books.length; i++) {
//     const result = asdfasdfdas(books[i], i, books);

//     if (result) {
//       newArray.push(books[i]);
//     }
//   }

//   return newArray;
// }

// ! Прибрати в претірі додавання дужок в коллбек функції на 1 параметрі

// TODO Старт - не все
// TODO
// function changeCity(user, city) {
//   const newUser = { ...user, address: { city } };
//   return newUser;
// }

// console.log(changeCity(user, 'Львів'));

// const books = [
//   { title: 'The Last Kingdom', rating: 8 },
//   { title: 'The Mist', rating: 6 },
// ];

// console.log(books.map((book, index) => {}));

// function map(callback) {
//   const newArray = [];

//   for (let i = 0; i < books.length; i++) {
//     const result = callback(books[i], i, books);
//     newArray.push(result);
//   }

//   return newArray;
// }

// !

// console.log(books.map(() => { }));

// function map(callback) {
//   const newArray = [];

//   for (let i = 0; i < books.length; i++) {
//     const result = callback(books[i], i, books);
//     newArray.push(result);
//   }

//   return newArray;

//
// !
//

// const books = [
//   { title: "The Last Kingdom", rating: 8 },
//   { title: "The Mist", rating: 6 },
// ];

// console.log(books.filter(() => {}));

// function filter(callback) {
//   const newArray = [];

//   for (let i = 0; i < books.length; i++) {
//     const result = callback(books[i], i, books);

//     if (result) {
//       newArray.push(books[i]);
//     }
//   }

//   return newArray;
// }

//
// !
//
// TODO Задача 1
// TODO З масиву товарів { id, title, price } треба отримати простий масив назв, щоб підставити його в підказку пошуку. Напиши стрілочну функцію getTitles, яка використовує map.
// TODO [{ id: 1, title: 'Миша' }, { id: 2, title: 'Монітор' }]

// const getTitles = (products) => {
//   const titleArr = products.map((el, id, arr) => {
//     return el.titleArr;
//   });
//   return titleArr;
// };

// console.log(
//   getTitles([
//     { id: 1, title: "Миша" },
//     { id: 2, title: "Монітор" },
//   ]),
// );

// ! Скорочено

// const getTitles = (products) => products.map((el) => el.title);

// console.log(
//   getTitles([
//     { id: 1, title: "Миша" },
//     { id: 2, title: "Монітор" },
//   ]),
// );

// TODO Задача 2
// TODO Кожна стаття має масив тегів. Для хмари тегів потрібен один плоский список (повтори поки що залишаємо). Напиши функцію collectTags(articles)
// TODO [{ tags: ['js', 'css'] }, { tags: ['html'] }]

// const collectTags = (tags) => {
//   const tagsArr = tags.flatMap((el, id, arr) => {
//     return el.tags;
//   });
//   return tagsArr;
// };

// console.log(collectTags([{ tags: ["js", "css"] }, { tags: ["html"] }]));

// ! Скорочено
// const collectTags = (articles) => articles.flatMap((article) => article.tags);

// console.log(collectTags([{ tags: ["js", "css"] }, { tags: ["html"] }]));

// TODO Задача 3
// TODO Постачальник підняв ціни на певний відсоток. Напиши функцію applyMarkup(prices, percent), яка повертає новий масив цін із націнкою, округлених до 2 знаків. Вихідний масив не змінюється.
// TODO ([100, 250], 10);

// const applyMarkup = (prices, percent) => {
//   const newPrices = prices.map((el, id, arr) => {
//     return Number((el * (1 + percent / 100)).toFixed(2));
//   });
//   return newPrices;
// };

// console.log(applyMarkup([100, 250], 10));

// ! Скорочено

// const applyMarkup = (prices, percent) =>
//   prices.map((el) => Number((el * (1 + percent / 100)).toFixed(2)));

// console.log(applyMarkup([100, 250], 10));

// TODO Задача 4 ...
// TODO
// пішли на перерву

// ! Мене не було

// ...

// TODO задача ...18:06
// TODO Користувачі вводять телефон як завгодно: з пробілами, дужками й дефісами. Напиши функцію normalizePhones(phones), яка залишає лише цифри і приводить номер до вигляду +380XXXXXXXXX. Номери, у яких після очищення не 12 цифр, познач як null.
// TODO ['(067) 123-45-67', '380671234567']

const onlyDigits = (phone) =>
  phone
    .split("")
    .filter((symbol) => symbol >= "0" && symbol <= "9")
    .join("");

const normalizePhones = (phones, callback) =>
  phones.map((phone) => {
    const digits = callback(phone);

    return digits.length !== 12 ? null : `+${digits}`;
  });

console.log(normalizePhones(["(067) 123-45-67", "380671234567"], onlyDigits));
