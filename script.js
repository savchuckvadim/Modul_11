function theGame(){
let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

if(isNaN(minValue) == true || isNaN(maxValue) == true){
    minValue = -999;
    maxValue = 999;
}
minValue < -999 ? minValue = -999 : true;
maxValue >  999 ? maxValue = 999 : true;


alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
let answerPhrase = '';
phrase(answerPhrase, answerNumber);
              

/*answerField.innerText = `${answerPhrase} ${answerNumber}?`;*/




document.getElementById('btnOver').addEventListener('click', function () { /*Больше */
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phrase(answerPhrase, answerNumber);
            intInText(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { /*Больше */
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали дичайшее число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phrase(answerPhrase, answerNumber);
            intInText(answerNumber);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseSuccess ();
        gameRun = false;
    }
})

  
}

theGame();
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    gameRun = true;
    theGame();
})

function phrase (a, b){


let phraseRandom = Math.round( Math.random());
console.log('phraseRandom');

if (phraseRandom === 1) {
    a = `\u{1F608} \n Знаю, знаю... это число `;
}else{
    phraseRandom = Math.round( Math.random());
    console.log('phraseRandom функция');
    if (phraseRandom === 1) {
        a = `\u{1F64A} \n Может это `;
    }else{
        a = `\u{1F9DE}  \n Читаю твои мысли! Ты загадал`;

  }
}return answerField.innerText = `${a} \n ${b}?`;
}

function phraseSuccess (){


    let phraseRandom = Math.round( Math.random());
    
    
    if (phraseRandom === 1) {
        return answerField.innerText = `\u{1F60E} \n Я всегда угадываю`;
    }else{
        phraseRandom = Math.round( Math.random());
        if (phraseRandom === 1) {
            return answerField.innerText = `\u{1F60F} \n Я сразу понял`;
        }else{
            return answerField.innerText = `\u{1F608} \n Это было очевидно`;
    
      }
    }
    }
    

    function intInText(a){
        let minus = "";
        let hundreds = "conyb";
        let dozens = "";
        let units = ""
        if(a < 0){
            minus = "минус";
        }
        else if(a < -899 || a > 899){
            hundreds = "девятьсот";
        }
        else if(a < -799 || a > 799){
            hundreds = "восемьсот";
        }
        else if(a < -699 || a > 699){
            hundreds = "семьсот";
        }
        else if(a < -599 || a > 599){
            hundreds = "шестьсот";
        }
        else if(a < -499 || a > 499){
            hundreds = "пятьсот";
        }
        else if(a < -399 || a > 399){
            hundreds = "четыреста";
        }
        else if(a < -299 || a > 299){
            hundreds = "триста";
        }
        else if(a < -199 || a > 199){
            hundreds = "двести";
        }
        else if(a < -99 || a > 99){
            hundreds = "сто";
        }
        a = String(a);
        let b = a[1];
        b = parseInt(b);
        if(b == 0) dozens = "";
        else if (b == 1) dozens = "1";/*if c = 1 одиннадцать и т.д */
        else if (b == 2) dozens = "двадцать";
        else if (b == 3) dozens = "тридцать";
        else if (b == 4) dozens = "сорок";
        else if (b == 5) dozens = "пятьдесят";
        else if (b == 6) dozens = "шестьдесят";
        else if (b == 7) dozens = "семьдесят";
        else if (b == 8) dozens = "восемьдесят";
        else if (b == 9) dozens = "девяносто";

        let c = a[2];
        c = parseInt(c);
        if(c == 0) units = "";
        else if (c == 1) units = "один";/*if c = 1 одиннадцать и т.д */
        else if (c == 2) units = "два";
        else if (c == 3) units = "три";
        else if (c == 4) units = "четыре";
        else if (c == 5) units = "пять";
        else if (c == 6) units = "шесть";
        else if (c == 7) units = "семь";
        else if (c == 8) units = "восемь";
        else if (c == 9) units = "девять";
        console.log(b);
        console.log(c);
        console.log(hundreds);
        console.log(dozens);
        console.log(units);



    }