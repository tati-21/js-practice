// TODO Старт

// const users = ["Poly", "Jacob"];

// const users2 = users;

// users2.push("Ajax");
// console.log(users);
// console.log(users2);

// console.log(users === users2);

// function myFunc(params) {
//   params.push("Hello");
//   console.log(params === users);
// }

// myFunc(users2);

// TODO Задача 1
// TODO Створи функцію `getFirstItem(items)`, яка повертає перший елемент масиву. Якщо масив порожній, поверни рядок `Кошик порожній`. Перевір масив `['Молоко', 'Хліб', 'Яблука']`.

// (Можна так: return items[0] || `Кошик порожній`;?)

// function getFirstItem(items) {
//     if (items.length === 0) {
//        return 'Кошик порожній'
//     }
//     return items[0];
// }

// console.log(getFirstItem(['Молоко', 'Хліб', 'Яблука']));

// TODO Задача 2
// TODO Створи `calculateAverage(ratings)`. Якщо масив порожній, поверни 0. Інакше циклом знайди суму й поділи її на кількість оцінок. Перевір `[5, 4, 5, 3, 3]`.

// function calculateAverage(ratings) {
//   if (ratings.length === 0) {
//     return 0;
//   }

//   let sum = 0;
//   let count = 0;

//   for (const rating of ratings) {
//     if (typeof rating === "number") {
//       sum += rating;
//       count += 1;
//     }
//   }
//   return sum / count;
// }
// console.log(calculateAverage([5, 4, 5, 3, 3, "hello"]));

// TODO Задача 3
// TODO Ціни та кількості зберігаються у двох масивах з однаковими індексами. Створи `calculateCartTotal(prices, quantities)`, яка додає `price * quantity` для кожної позиції. Перевір `[80, 25, 40]` і `[2, 3, 1]`.

// function calculateCartTotal(prices, quantities) {
//   let total = 0;

//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i] * quantities[i];
//   }

//   return total;
// }

// console.log(calculateCartTotal([80, 25, 40], [2, 3, 1]));

// TODO Задача 4
// TODO Створи `applyDiscount(prices, percent)`, яка повертає новий масив цін після знижки. Для округлення до двох знаків використай `Number(value.toFixed(2))`. Не використовуй `map()`. Перевір `[100, 250, 80]`, `10`.

// function applyDiscount(prices, percent) {
//   const newPrices = [];

//   //   не підходить у цьому випадку
//   //   for (let i = 0; i < prices.length; i++) {
//   //     console.log(prices[i]);
//   //   }

//   for (const price of prices) {
//     const discounted = price - (price * percent) / 100;
//     newPrices.push(Number(discounted.toFixed(2)));
//   }
//   return newPrices;
// }

// console.log(applyDiscount([100, 250, 80], 10));

// TODO Задача 5 - на відео, не записана
// TODO Створи `paginate(items, pageSize)`, яка повертає вкладений масив сторінок. Кожна сторінка містить не більше `pageSize` елементів. Використай вкладені цикли, без `slice()` усередині розв’язання. Перевір `[1, 2, 3, 4, 5, 6, 7]`, `3`.

// TODO Задача 6
// TODO Створи `cleanTags(tags)`. Для кожного рядка прибери крайні пробіли, переведи його у нижній регістр. Перевір `[' JavaScript ', 'web', ' ', 'javascript', 'WEB ']`.

// function cleanTags(tags) {
//   const newTags = [];

//   for (const tag of tags) {
//     const normalizeTag = tag.trim().toLowerCase();

//     if (normalizeTag && !newTags.includes(normalizeTag)) {
//       newTags.push(normalizeTag);
//     }
//   }

//   return newTags;
// }

// console.log(cleanTags([" JavaScript ", "web", " ", "javascript", "WEB "]));

// TODO Задача 7
// TODO Створи `searchNames(names, query)`. Поверни новий масив назв, що містять запит без урахування регістру. Використай цикл та рядковий `includes()`. Перевір `['JavaScript Basics', 'React Start', 'Advanced JavaScript']`, `'script'`.

// function searchNames(names, query) {
//   const newNames = [];

//   for (const name of names) {
//     const normalizeName = name.toLowerCase().trim();

//     if (normalizeName.includes(query.toLowerCase)) {
//       newNames.push(normalizeName);
//     }
//   }
// }

// console.log(
//   searchNames(
//     ["JavaScript Basics", "React Start", "Advanced JavaScript"],
//     "script",
//   ),
// );

// TODO Задача 8
// TODO Створи `limitHistory(history, limit)`, яка повертає новий масив лише з останніх `limit` запитів. Початковий масив не змінюй. Перевір п’ять запитів і ліміт 3.
// const history = ["HTML", "CSS", "JS", "React", "Node"];

// function limitHistory(history, limit) {
//   const lastestHistory = [];

//   for (let i = history.length - limit; i < history.length; i += 1) {
//     if (history[i]) {
//       lastestHistory.push(history[i]);
//     }
//   }
//   return lastestHistory;
// }

// console.log(limitHistory(history, 7));

// ! 2 варіант
// const history = ["HTML", "CSS", "JS", "React", "Node"];

// function limitHistory(history, limit) {
//   const startIndex = history.length > limit ? history.length - limit : 0;
//   return history.slice(startIndex);
// }

// console.log(limitHistory(history, 3));

// ! 3 варіант
// return history.slice(-limit);

// TODO Задача 8
// TODO Створи `getUnsubscribed(previous, current)`, яка повертає імена, що були у попередньому масиві, але відсутні в поточному. Перевір `['Іра', 'Макс', 'Оля']` і `['Макс', 'Оля', 'Тарас']`.

// function getUnsubscribed(previous, current) {
//   const unsubscribers = [];
//   for (const element of previous) {
//     if (!current.includes(element)) {
//       unsubscribers.push(element);
//     }
//   }
//   return unsubscribers;
// }

// console.log(getUnsubscribed(["Іра", "Макс", "Оля"], ["Макс", "Оля", "Тарас"]));
