document.write('_____Завдання - 1 : Виведіть стовпець чисел від 1 до 100.______<br></br>'); // Лінія

for ( let i = 1; i <= 100; i++ ) {
    document.write(i +'</br>');
}

document.write('_____Завдання - 2 : Виведіть стовпець чисел від 11 до 33._____<br></br>'); // Лінія

for ( let i = 11; i <= 33; i++ ) {
    document.write(i +'</br>');
}

document.write('_____Завдання - 3 : Виведіть стовпець парних чисел у проміжку від 0 до 100._____<br></br>'); // Лінія

for ( let i = 0; i <= 100; i++ ) {
    if ( i % 2 ) {
        continue;
    }
    document.write(i +'</br>');
}



function getSum(from, to) {
    let sum = 0;
    for ( let i = from; i <= to; i++ ) {
        sum += i;
    }
    console.log('Сума чисел - ' + sum);
}


getSum(1, 100);
getSum(25, 250);

function getMultipleNumber(num) {
    console.log('Завдання - 5 : Виведіть всі числа кратні 5, 8, 10 від 1 до 300.');
    for ( let i = 1; i <= 300; i++) {
        if ( i % num ) {
            continue;
        }
        console.log('Результат - ' + i);
    }

}

// Кратність від числа 5 //
getMultipleNumber(5); 

// Кратність від числа 8 // 
getMultipleNumber(8);

// Кратність від числа 10 //
getMultipleNumber(10);



