// const numbers = [1, true, 2, "пойдем гулять", 6, 5, null];

// numbers.forEach(function(item, INDEX) {
//     if (typeof item === 'number')  {
//         console.log("число", item,"индекс", INDEX);
//     } 
// });
// numbers.forEach(function(item, INDEX) {
//     if (typeof item === 'number' && item === INDEX )  {
//         console.log("число", item);
//     } 
// })
// const numbers = [1, true, 2, "пойдем гулять", 6, 5, null];

// numbers.forEach(function (element, index) {
//     if (typeof element === "number") {
//         console.log(`Index ${index}: Element ${element}`);
//     }
// });

// const numbers = [1, true, 2, "пойдем гулять", 6, 5, null];
// numbers.forEach(function (element, index) {
//     if (typeof element === "number" && element === index) {
//         console.log(`Index ${index}: Element ${element}`);
//     } 
// });
// let i = 0;
// for (i; i <= 20; i++) {
//     console.log(i);
// }
// console.log('nbv', i);
// const numbers = [2, 5, 9, 25, 36, 46, 57];

// const even = numbers.filter(function(item) {
//     return item % 2 === 0;
// });
// console.log('New : ${even}');

// 1: Дано: массив чисел const numbers = [5, 10, 15, 20, 25].Используя map, создайте новый массив, где каждый элемент будет увеличен на 3.
// Ожидаемый результат: [8, 13, 18, 23, 28]

const numbers = [5, 10, 15, 20, 25];

const newNumbers = numbers.map(function(item) {
    return item + 3;
});

console.log("Новый массив: newNumbers", newNumbers);

// Задание 2: Дан массив строк const words = ["apple", "banana", "cherry", "date"]. Используя метод map, создайте новый массив, который будет содержать длины каждой строки из исходного массива.
// Ожидаемый результат: [5, 6, 6, 4]

const words = ["apple", "banana", "cherry", "date"];

const wordLengths = words.map(function(word) {
    console.log(`Слово "${word}" имеет длину ${word.length}`);
    return word.length;
});

console.log("Массив длин слов:", wordLengths);

// Задание 3: Дан массив объектов с информацией о товарах:
// const products = [
//     { name: "laptop", price: 1000 },
//     { name: "phone", price: 600 },
//     { name: "tablet", price: 450 }
// ];
// Используя map, создайте новый массив, где каждый объект будет содержать только name товара и price с 20%-ной скидкой.
// Ожидаемый результат:
// [
//     { name: "laptop", price: 800 },
//     { name: "phone", price: 480 },
//     { name: "tablet", price: 360 }
// ]

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
];

const DiscountedProducts = products.map(function(product) {
    const DiscountedPrice = product.price * 0.8; 
    console.log(`Товар "${product.name}" со скидкой стоит ${DiscountedPrice}`);
    return { name: product.name, price: DiscountedPrice };
});

console.log("Массив товаров со скидкой: DiscountedProducts", DiscountedProducts);

// Мутирующие методы массива в JavaScript — это методы, которые изменяют (мутируют) сам массив, на котором они вызываются. Они могут добавлять, удалять или изменять элементы, что влияет на исходный массив. В отличие от немутирующих методов, которые возвращают новый массив, мутирующие методы изменяют оригинальный.

// Примеры мутирующих методов массива
// 1.push — добавляет элемент(ы) в конец массива.

// const arr = [1, 2, 3];
// arr.push(4); // arr станет [1, 2, 3, 4];

// 2.pop — удаляет последний элемент из массива и возвращает его.

// const arr = [1, 2, 3];
// arr.pop(); // arr станет [1, 2];

// 3.shift — удаляет первый элемент массива и возвращает его.

// const arr = [1, 2, 3];
// arr.shift(); // arr станет [2, 3];

// 4.unshift — добавляет элемент(ы) в начало массива.

// const arr = [1, 2, 3];
// arr.unshift(0); // arr станет [0, 1, 2, 3];

// 5.splice — добавляет, удаляет или заменяет элементы массива по указанным индексам.

// const arr = [1, 2, 3, 4];
// arr.splice(1, 2); // arr станет [1, 4];

// 6.sort — сортирует элементы массива.

// const arr = [3, 1, 4, 2];
// arr.sort(); // arr станет [1, 2, 3, 4];

// 7.reverse — изменяет порядок элементов массива на обратный.

// const arr = [1, 2, 3];
// arr.reverse(); // arr станет [3, 2, 1];

// Немутирующие методы для сравнения
// Методы, такие как map, filter, и slice, не изменяют исходный массив, а создают и возвращают новый массив.

