// todo задача 1.1
// todo Кнопка оформлення замовлення заблокована, доки користувач не поставив галочку згоди.

// todo Що зробити:
// todo Повісити обробник change на чекбокс.
// todo Керувати властивістю disabled кнопки залежно від event.target.checked.
// todo Перевірити, що зняття галочки знову блокує кнопку.

// const refs = {
//   checkbox: document.querySelector("#agree"),
//   orderBtn: document.querySelector("#order"),
// };

// refs.checkbox.addEventListener("change", onCheckBoxClick);

// function onCheckBoxClick(event) {
//   refs.orderBtn.disabled = !event.target.checked;

//   refs.orderBtn.disabled = event.target.checked ? false : true;
// }

// todo задача 1.2
// todo Під полем відгуку показуємо, скільки символів уже введено, і попереджаємо, коли ліміт майже вичерпано.

// todo Що зробити:
// todo Слухати подію input на textarea.
// todo Виводити поточну довжину value в лічильник.
// todo Додавати клас warn, коли залишилось менше 20 символів.
// todo Порівняти: чому не підходить keyup.

const LIMIT = 200;

const refs = {
  reviewTextArea: document.querySelector("#review"),
  spanUsed: document.querySelector("#used"),
};

refs.reviewTextArea.addEventListener("input", onReviewTextAreaInput);

function onReviewTextAreaInput() {
  const length = refs.reviewTextArea.value.length;

  refs.spanUsed.textContent = length;

  refs.spanUsed.classList.toggle("warn", length > LIMIT - 180);
}
