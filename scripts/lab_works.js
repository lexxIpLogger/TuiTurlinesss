var button1_1, button1_2, button2_1, button2_2, button2_3, button2_4;

button1_1 = document.getElementById('button1_1');

button1_2 = document.getElementById('button1_2');

button2_1 = document.getElementById('button2_1');

button2_2 = document.getElementById('button2_2');

button2_3 = document.getElementById('button2_3');

button2_4 = document.getElementById('button2_4');

function number1_1(){
     alert('Программа для расчета периметра и площади прямоугольника')
    var S;
    var P;
    var prom_dlina;
    var prom_shirina;
    var shirina;
    var dlina;
    var x1 = prompt('x1 для первой точки');
    x1 = parseInt(x1);
    var y1 = prompt('y1 для первой точки');
    y1 = parseInt(y1);
    var x2 = prompt('x2 для первой точки');
    x2 = parseInt(x2);
    var y2 = prompt('y2 для первой точки');
    y2 = parseInt(y2);
    shirina = Math.abs(x1 - x2);
    prom_shirina = shirina;
    dlina = Math.abs(y1 - y2);
    prom_dlina = dlina;
    S =  prom_shirina * prom_dlina;
    alert('Площадь: ' + S);
    P = 2 * (prom_shirina + prom_dlina);
    alert('Периметр: ' + P);   
}

function number1_2(){
    alert('Данная программа посчитает количество полных минут от начала суток')
    var minutes;
    var seconds;
    var ost_seconds;
    seconds = prompt('Введи количество секунд прошедих от начала суток: ');
    seconds = parseInt(seconds);
    minutes = seconds / 60;
    minutes = parseInt(minutes)
    ost_seconds = seconds % 60;
    alert( 'С начала суток прошло: ' + minutes + ' минут ' + ost_seconds + ' секунд ' )
}


function number2_1(){
    alert('Данная программа проверяет есть ли в введенных числах взаимно обратные')
                
    alert('Введите три числа НЕ РАВНЫХ НУЛЮ')
    var chislo_one = prompt('Введи первое число');
    var chislo_two = prompt('Введи второе число');
    var chislo_three = prompt('Введи третье число');

    chislo_one = parseInt(chislo_one);
    chislo_two = parseInt(chislo_two);
    chislo_three = parseInt(chislo_three);


    var one_two = ( chislo_one +  chislo_two );
    var two_three = ( chislo_two + chislo_three );
    var one_three = ( chislo_one +  chislo_three );

    alert('Сумма Первого и Второго = ' + one_two + ' | Сумма Второго и Третьего = ' + two_three + ' | Сумма Первого и Третьего = ' + one_three)

    if (one_two == 0){
        alert('True');
    }
    else{
        if(two_three == 0){
            alert('True');
        }
        else{
            if(one_three == 0){
                alert('True')
            }
            else{
                alert('False')
                }
            }
        }
    }

function number2_2(){
    alert('Данная программа находит из 4 целых чисел отличное и выводит его позицию');
    alert('Введите одно число отличное от трех остальных равных между собой');

    var num_one = prompt('Первое число: ');
    var num_two = prompt('Второе число: ');
    var num_three = prompt('Третье число: ');
    var num_four = prompt('Четвертое число: ');

    num_one = parseInt(num_one);
    num_two = parseInt(num_two);
    num_three = parseInt(num_three);
    num_four = parseInt(num_four);


    if(num_one != num_two)
    {
        if(num_one != num_three)
        {
            if(num_one != num_four)
            {
                alert(' Первое число отлично от других, позиция 1 ')
            }
        }
    }

    if(num_two != num_one)
    {
        if(num_two != num_three)
        {
            if(num_two != num_four)
            {
                alert(' Второе число отлично от других, позиция 2 ')
            }
        }
    }


    if(num_three != num_one)
    {
        if(num_three != num_two)
        {
            if(num_three != num_four)
            {
                alert(' Третье число отлично от других, позиция 3 ')
            }
        }
    }

    if(num_four != num_one)
    {
        if(num_four != num_two)
        {
            if(num_four != num_three)
            {
                alert(' Четвертое число отлично от других, позиция 4 ')
            }
        }
    }
}

function number2_3(){
    var x = prompt('Введи x ');
    var y;
    var a = 3.9;
    var b = 2.4;

    x = parseFloat(x);
    a = parseFloat(a);
    b = parseFloat(b);

    if(x <= 3)
    {
        y = (a + x) / (1 + Math.sqrt(Math.abs(x)));
    }

    if(3 < x)
    {
        if(x <= 5)
        {
            y = Math.log( (a * x) + (b * x * x) );
        }
    }

    if(x > 5)
    {
        y = Math.exp(b + x);
    }

    alert( 'y(x) = ' + y );
}

function number2_4(){
    var x = prompt('Введи x');
    var y;
    var a = 3.9;
    var b = 2.4;
    x = parseInt(x);
    a = parseFloat(a);
    b = parseFloat(b);
    switch(x)
    {

    case 3:
        y = (a + x) / (1 + Math.sqrt(Math.abs(x)));
        break;

    case 5:
        y = Math.log( (a * x) + (b * x * x) );
        break;

    case 12:
        y = Math.exp(b + x);
        break;

    default:
        alert('Число: ' + x + ' введите пожалуйста 3 или 5 или 12');
        y = 'Отсутствует';
        break;
    }
    alert('Значение функции y(x)=' + y );
}


function number10_1(){
    var quantityNum, all_num, countNum; //Объявление переменных

    quantityNum = 2+Math.floor(20 * Math.random()) // Количество рандомных чисел, формируется от 2 до 20
    all_num = [] // Массив Элеменетов для дальнейшей переборки
    found_num = [] //Массив для найденых чисел
    countNum = 0 // Cчетчик нужных нам значений 

    for (let i = 0; i < quantityNum; i++){
        all_num.push(1+Math.floor(10 * Math.random()))
    } // цикл прендназначен для формирования массива

    for (let j = 0; j < quantityNum; j++){
        if(all_num[j] < all_num[j+1]){
            found_num.unshift(all_num[j])
            countNum++;
        } // Ищет элементы что меньше своего правого соседа, то есть элементы что меньше следующего по индексу.
    } // цикл предназначен для переборки массива и поиска нужных элементов

    alert("Оригинальный массив " + all_num)
    alert("Массив с нужными элементами " + found_num) //Массив с нужными элементами
    alert("Количество найденных " + countNum) //Вывод количества нужных нам элементов
}

function number10_2(){
    var number, fact; //Объявление переменных
    number = prompt("Введите число, факториал которого интересует") // Заполняем переменную number число факториал которого будем расчитывать
    fact = 1; // начальное значение факториала
    for(let i = 1; i <= number; i++){ 
        fact = fact * i
    } // В цикле формируем факториал

    alert(fact) // Вывод полученного факториала на экран
}

function number10_3(){
    var arrNum, lengthArr, minNumArr; //Объявление переменных
    arrNum = [] //Массив в котором будем искать минимальный четный
    lengthArr = prompt("Введите длину массива")
    for(let i = 0; i < lengthArr; i++){
        arrNum.push(1+Math.floor(10 * Math.random()))
    } //Формируем массив числами от 1 до 10

    minNumArr = arrNum[0] // Представляем минимальный опорный элемент в качестве первого элемента массива

    for(let j = 0; j < lengthArr; j++){
        if (j % 2 == 0){
            if(arrNum[j] < minNumArr){
                minNumArr = arrNum[j]
            } // Если текущее меньше минимального меняем местами
        } // Если индекс четный то делаем следующую проверку
    } // Перебираем Массив
    alert(arrNum)
    alert(minNumArr)
}

function number10_4(){
    var quantityNum, all_num, countNum; //Объявление переменных
    quantityNum = 2+Math.floor(10 * Math.random()) // Количество рандомных чисел, формируется от 2 до 10
    all_num = [] // Массив Элеменетов для дальнейшей переборки
    countNum = 0 // Cчетчик нужных нам значений 

    for (let i = 0; i < quantityNum; i++){
        all_num.push(1+Math.floor(10 * Math.random())) 
    } // цикл прендназначен для формирования массива цислами от 1 до 10

    alert(all_num + ' original')

    for (let j = 0; j < quantityNum;){
        if(all_num[j] < all_num[j+1] && all_num[j] < all_num[j-1]){
            all_num[j] = all_num[j] * all_num[j]
            j += 2
        }
        else{
            j += 1
        }// Ищет элементы что меньше своего правого соседа, то есть элементы что меньше следующего по индексу.
    } // цикл предназначен для переборки массива и поиска нужных элементов

    alert(all_num + ' modification') //Вывод количества нужных нам элементов
}

button1_1.addEventListener('click', number1_1);
button1_2.addEventListener('click', number1_2);
button2_1.addEventListener('click', number2_1);
button2_2.addEventListener('click', number2_2);
button2_3.addEventListener('click', number2_3);
button2_4.addEventListener('click', number2_4);
button10_1.addEventListener('click', number10_1);
button10_2.addEventListener('click', number10_2);
button10_3.addEventListener('click', number10_3);
button10_4.addEventListener('click', number10_4);


