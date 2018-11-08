const addNumber = (a, b) => {

    const numbers = [a, b];

    return numbers.reduce((acc, number) => {
        return sum += number;
    }, 0)
}


const addAll = (...numbers) => {

    return numbers.reduce((acc, number) => {
        return sum += number;
    }, 0)
}

let defaltColors = ['red', 'blue', 'green', 'gold'];
let myColors = ['red', 'gold'];

let palett = defaltColors.comcat(myColors);
palett = ['brown', 'white', ...defaltColors, ...myColors];

const showShoopingList = (...items) => {
    if (items.indexOf('c') < 0) {
        return ['mike', ...items]
    }
}

let MathLibrary = {
    caculateProduct(a, b) {
        return a * b;
    }
}

let MathLibrary = {
    multiply(a, b) {
        return a * b;
    },

    caculateProduct(...args) {
        console.log('please use method ')
        return this.multiply(...args)
    }
}


//실습 1 
const join = (array1,array2) => {
    return array1.comcat(array2)
}

// 실습1 정답 
const join = (array1,array2) => {
    return [...array1,...array2];
}

//  실습 2 
const unshift = (array,a,b,c,d,e) => {
    return {a,b,c,d,e}.comcat(array);
}

//  실습2 정답
const unshift = (array,...args) => {
    return [...array,...args];
}