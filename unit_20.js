// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    document.querySelector('.out-1').innerHTML += event.key;
    return event.key;
}

document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').textContent += event.charCode;
    return event.charCode;
}

document.querySelector('.i-2').onkeypress = t2;



// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
let i3 = document.querySelector('.i-3');

function t3(event) {
    let k = event.charCode;
    if (k >= 48 && k <= 57) {
        document.querySelector('.out-3').textContent = false;
    } else if (k >= 65 && k <= 90) {
        document.querySelector('.out-3').textContent = true;
    } else if (k >= 101 && k <= 132) {
        document.querySelector('.out-3').textContent = true;
    }
}

i3.onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let i4 = document.querySelector('.i-4');

function t4() {
    document.querySelector('.out-4').textContent = i4.value.toLowerCase();
}

i4.onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let i5 = document.querySelector('.i-5');

function t5() {
    document.querySelector('.out-5').textContent = i5.value.toUpperCase();
}

i5.onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let i6 = document.querySelector('.i-6');

function t6(event) {
    let checkCase = event.key.toLowerCase();
    if (checkCase == event.key) {
        i6.textContent = checkCase;
    } else {
        return false;
    }
}

i6.onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

let i7 = document.querySelector('.i-7');

function t7(event) {
    const a7 = ['a', 'b', 'c', 'd', 'e', 'f', 'o', 'p', 's'];
    let random = Math.floor(Math.random() * a7.length);
    document.querySelector('.out-7').innerHTML += a7[random];
}

i7.onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let i8 = document.querySelector('.i-8');
let out8 = document.querySelector('.out-8');
let str = '';

function t8(event) {

    if (event.key == 'i') {
        str += 1;
    } else if (event.key == 'o') {
        str += 0;
    } else if (event.key == 'l') {
        str += 7;
    } else {
        str += event.key;
    }
    out8.innerHTML = str;
}

i8.onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let i9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');
let count = 1;

function t9(e) {

    console.log(e.key)
    if (e.key == 'ArrowDown') {
        count++;
        out9.innerHTML = count;
    }

}

i9.onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let div10 = document.querySelector('.div-10 img');
let w = div10.offsetWidth;
let h = div10.offsetHeight;

function t10(event) {
    if (event.key == 'ArrowDown' || event.key == 'ArrowUp') {
        div10.style.height = h + 'px';
        h++;
    }
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        div10.style.width = w + 'px';
        w++;
    }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */


function t11(e) {
    document.querySelector('.key[data="' + e.code + '"]').classList.add('active');
}
document.querySelector('.i-11').onkeydown = t11;


function keyUp() {
    document.querySelector('.out-11').innerHTML = document.querySelector('.i-11').value;
    document.querySelectorAll('.key').forEach(function (elem) {
        elem.classList.remove('active');
    })
}
document.querySelector('.i-11').onkeyup = keyUp;

document.querySelectorAll('.key').forEach(function (element) {
    element.onclick = function () {
        document.querySelectorAll('.key').forEach(function (element) {
            element.classList.remove('active');
        });
        document.querySelector('.out-11').innerHTML += element.textContent;
        console.log(element)
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
});