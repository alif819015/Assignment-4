/* Problem 1: Let’s play a mind game */
function mindGame(number){
    let multiplication = number * 3;
    let add = multiplication + 10;
    let division = add / 2;
    let subtraction = division - 5;

    return subtraction;
}
let result = mindGame(5);

/* Problem 2: Finding even or odd */
function evenOdd(name){
    let element = name.length;
    let element1 = element %2;
    if( element1 == 0){
        return element,('even');

    }
    else{
       return element,('odd');
    }
}
let result = evenOdd('Batch7');

/* Problem 3: Is Less or Greater than seven */
function isLGSeven(number){
    let subtraction = number - 7;
    let element1 = subtraction;
    let element = Math.abs(subtraction);
    let double = element*2;
    if( element < 7){
        return element1;
    }
    else if ( element < 7){
    return number;

    }
    else{
        return double;
    }

}
let result = isLGSeven(13);


/* Problem 4: Finding Bad data */
function findingBadData(age) {
    let count = 0;
    for (let i = 0; i < age.length; i++) {

        const element = age[i];
        if (element < 0 ){
            count++;   
        }
        else{

        }
    }
    return count;

}
let result = findingBadData([10, -3, 15, 30, 40, 33, 80, -23, -19, 100, -150]);



/* Problem 5: Convert your gems into diamond */
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    let number1 = firstFriend * 21;
    let number2 = secondFriend * 32;
    let number3 = thirdFriend * 43;
    let totalNumber = number1 + number2 + number3;
    if (totalNumber >= 1000 * 2) {
        let divisionNumber = totalNumber - 2000;
        return divisionNumber;
    }
    else {
return totalNumber;
    }
}
let result = gemsToDiamond(100, 5, 1);

