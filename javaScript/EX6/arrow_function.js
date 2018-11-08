
// ES5
const add = function(a,b){
    return a + b;
}


add(1,2);


// ES6

let multiply = function (a,b){
    return a * b;
}


multiply= (a,b) => {
    return a*b;
}

multiply = (a,b) => a * b;

let double = number => number * 2;

const numbers  = [1,2,3];

const doubleNumbers = numbers.map((number) => {
    return 2 * number;
});

doubleNumbers = numbers.map(number => 2 * number)


const sum = (a=0,b=0) =>  a+ b;