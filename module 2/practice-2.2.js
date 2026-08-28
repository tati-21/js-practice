// Задача 1(не робили)
// За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.
    

// Задача 1
// Створи функцію`countVowels(text)`.Переведи текст у нижній регістр і циклом порахуй англійські голосні`a`, `e`, `i`, `o`, `u`.Перевір`'Education'`.

// function countVowels(text) {
//     const lowerText = text.toLowerCase();

//     // console.log(loverText[0]);
//     // console.log(loverText[1]);
//     // console.log(loverText[2]);

//     let count = 0;
    
//     for (let i = 0; i <= lowerText.length; i += 1) {
        

//         if (lowerText[i] === 'a' || lowerText[i] === 'e' || lowerText[i] === 'i' || lowerText[i] === 'o' || lowerText[i] === 'u') {
//             count += 1;
            
//         }
        
//     }
//     return count;
// }

// console.log(countVowels('Education'));





// Задача 2
// За допомогою циклу `for` виведи числа від 5 до 1, а після завершення циклу — слово `Старт!`.



// function start(seconds) {
//     // alert('Hello');
//     for (let i = seconds; i > 0; i -= 1) {
//         console.log(i);
//     }
// console.log(`Старт!`)
// }

// // console.log(start(5));
// start(5);




// Задача 3
// Є рядок `'JS'`. Пройди по ньому циклом і для кожного символу виведи рядок формату `<позиція>: <символ>`.

// function message(string) {
//     for (let i = 0; i < string.length; i += 1) {
//         console.log(`${i+1}: ${string[i]}`)
    

// }
// }

// message('JS');