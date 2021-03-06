// Итерация с JavaScript для циклов
// Вы можете запустить один и тот же код несколько раз, используя цикл.
//
//     Наиболее распространенный тип цикла JavaScript называется forциклом, потому что он выполняется определенное количество раз.
//
//     Циклы for объявляются с тремя необязательными выражениями, разделенными точкой с запятой:
//
//     for (a; b; c), где aоператор инициализации, оператор bусловия и cконечное выражение.
//
//     Оператор инициализации выполняется только один раз перед запуском цикла. Обычно он используется для определения и настройки вашей переменной цикла.
//
//     Оператор условия оценивается в начале каждой итерации цикла и будет продолжаться до тех пор, пока он оценивается как true. Когда условие находится falseв начале итерации, выполнение цикла прекращается. Это означает, что если условие начинается как ложное, ваш цикл никогда не будет выполняться.
//
//     Окончательное выражение выполняется в конце каждой итерации цикла перед следующей проверкой условия и обычно используется для увеличения или уменьшения счетчика цикла.
//
//     В следующем примере мы инициализируем i = 0и повторяем, пока наше условие i < 5истинно. Мы будем увеличивать iна 1в каждой итерации цикла с i++нашим окончательным выражением.
//
//     const ourArray = [];
//
// for (let i = 0; i < 5; i++) {
//     ourArray.push(i);
// }
// ourArrayтеперь будет иметь значение [0, 1, 2, 3, 4].
//
//     Используйте forцикл, чтобы поместить значения от 1 до 5 в myArray.


// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 6; i++){
    myArray.push(i);
}