'use strict';
let correctMark = [];
let userName = prompt('hi to my website what is your name stranger ?')
userName= prompt("oh Hi nice to met you  " + userName);

function Q1(){
let guessingGame = prompt("do you wana play a guessing game about me ? ");
if (guessingGame != null) {
    guessingGame = guessingGame.toLowerCase();

}


switch (guessingGame) {
    case 'yes':
    case 'y':
        //console.log('great !! ,lets start ');
        alert('great !! ,lets start ');
        correctMark.push(1);
        console.log(correctMark);
        break;
    case 'no':
    case 'n':
        //console.log('oh why!!');
        alert('oh why!!');
        break;
    default:
        //console.log('you have to answer either yes or no');
        alert('you have to answer either yes or no');
        break;
}
}

function Q2(){
let gender = prompt('am I a girl?');
if (gender != null) {
    gender = gender.toLowerCase();
}
switch (gender) {
    case 'yes':
    case 'y':
        // console.log('thats trueee ');
        alert('thats trueee ');
        correctMark.push(1);
        console.log(correctMark);
        break;
    case 'no':
    case 'n':
        // console.log('oh I\'m a girl!!');
        alert('oh I\'m a girl!!');
        break;
    default:
        //  console.log('I\'m sure that I\'m a person !!');
        alert('I\'m sure that I\'m a person !!');
        break;
}
}

function Q3(){
let age = prompt('do you think that I\'m a bove 20 ?');
if (age != null) {
    age = age.toLowerCase();
}
switch (age) {
    case 'yes':
    case 'y':
        // console.log('thats trueee ');
        alert('thats trueee ');
        correctMark.push(1);
        console.log(correctMark);
        break;
    case 'no':
    case 'n':
        // console.log('I wish that I\'m still under 20');
        alert('I wish that I\'m still under 20');
        break;
    default:
        //  console.log('oh so what do you think then??!');
        alert('oh so what do you think then??!');
        break;
}
}

function Q4(){
let country = prompt('do you think that I\'m live in Jordan?');
if (country != null) {
    country = country.toLowerCase();
}
switch (country) {
    case 'yes':
    case 'y':
        // console.log('thats trueee ');
        alert('thats trueee ');
        correctMark.push(1);
        console.log(correctMark);
        break;
    case 'no':
    case 'n':
        // console.log('you are wrong ');
        alert('you are wrong ');
        break;
    default:
        // console.log('you have to guss!!');
        alert('you have to guss!!');
        break;
}
}

function Q5(){
let study = prompt('do you think that I\'m still study?');
if (study != null) {
    study = study.toLowerCase();
}
switch (study) {
    case 'yes':
    case 'y':
        //  console.log('thats trueee ');
        alert('thats trueee ');
        correctMark.push(1);
        console.log(correctMark);
        break;
    case 'no':
    case 'n':
        //console.log('no I\'m still study ');
        alert('no I\'m still study ');
        break;
    default:
        // console.log('you have to write yes or no!! come on ');
        alert('you have to write yes or no!! come on ');
        break;
}
}

function Q6(){
let favNumber = prompt('now you have to guess my fav Number ,hint its between 1 and 10 ');

let count = 1;
   if(favNumber == 3){
    alert('good Job you are amazing !!!');
    correctMark.push(1);
    console.log(correctMark);
    }
   else if (favNumber != 3){
        while(count != 4){
        if (favNumber > 3){
            favNumber =prompt('its so high come on !!');
           }
        else if (favNumber < 3) {
               favNumber = prompt('its low man come on !!!');
            }
            else{
                alert('its true');
                break;
            }
           count++ ;
        }
        alert(' come on its 3'); 
    }
}
 function Q7(){   
let favcolores = ['blue', 'green', 'black','yellow'];

for (let i = 1; i < 6; i++) {
    let answer = prompt('enter a color that you think is my fav');
    for(let j = 0 ; j < favcolores.length ; j++){
    if (answer == favcolores[j]) {
        alert('yes that\'s true');
        correctMark.push(1);
        console.log(correctMark);
        i=6;
    }
}
   if(i < 6){
       alert ('sorry its not corect');
   }    
    

   
}
alert(favcolores);
}
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();

console.log(correctMark.length);
alert('your mark is '+correctMark.length+'/7');
  