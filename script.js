function theGame(){
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
console.log(answerNumber );
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