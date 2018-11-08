// ES5
var name = '서태한';
var title = 'Junior software developer';
var workHour = '9 am to 6 pm';

function count(targetString) {
    var characters = ['a', 'b', 'c']
    var number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }
    return number;
}


// ES6
const name = '서태한';
let title = 'Junior software developer';
let workHour = '1pm to 6pm';

function count(targetString) {
    var characters = ['a', 'b', 'c']
    
    const number = targetString.split('').reduce(function(acc,e){
        
        if(characters.includes(char))
        {
            acc++
        }

        return acc;
    }, 0)

    return number;
}