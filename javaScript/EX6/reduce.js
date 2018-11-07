var numbers = [10, 20, 30];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

//  ES6
var result = numbers.reduce(function (acc, number) {
    return acc + number;
}, 0)


var myColors = [
    { color: 'block' },
    { color: 'red' },
    { color: 'gold' },
];

var onlyColors = myColors.map(function (myColor) {
    return myColors.color;
})

var onlyColors2 = myColors.reduce(function (acc, color) {
    acc.push(color.color);

    return acc;
}, [])

//코딩테스트 

function isGoodParens(string) {
    var arr = string.split('');

    var result = arr.reduce(function (acc, c) {
        
        if(acc < 0){
            return acc;
        }
        else if (char === '('){
            ++acc;
        }
        else {
            --acc;
        }

        return acc;
    }, 0)

    console.log(result);

    if(result === 0)
    {
        return console.log(true);
    }
    else 
    {
        return console.log(false);
    }
    
}

isGoodParens('()()()()()')
isGoodParens(')((((()))))')
isGoodParens(')((((()))))(')
isGoodParens(')((()(()))))(')


//실습
var trips = [
    { distance: 34 },
    { distance: 10 },
    { distance: 100 },
]

var totalDistance = trips.reduce(function (acc, trip) {
    acc += trip.distance;
}, 0)

//실습 2
var desks = [
    { type: 'Sitting' },
    { type: 'Standing' },
    { type: 'Sitting' },
    { type: 'Standing' },
];

var deskTypes = desks.reduce(function (acc, desk) {
    if (desk.type === 'Standing') { acc.standing++; }
    else if (desk.type === 'Sitting') { acc.sitting++; }
}, [{ standing: 0, sitting: 0 }])

console.log(deskTypes)

//실습 3
 
function unique(array){
    array.reduce(function(acc,e){
        
       var isFind =  acc.find(function(une){
            return e == une;
        })

        if(!isFind)
        {
            acc.push(e);
        }

        return acc;
        

    },[])
}   

var numbers = [4,1,3,2,2,1,3,3,4,4,4]

unique(numbers);