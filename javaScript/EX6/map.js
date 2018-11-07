var numbers = [1, 2, 3];
var dNumbers = [];

// ES 5

for (var i = 0; i < number.length; i++) {
    dNumbers.push(numbers[i] * 2);
}

// ES 6

var tNumbers = numbers.map(function (number) {
    return number * 3;
})

var posts = [
    { title: 'Heppy', content: 'Hacking' },
    { title: 'Multi', content: 'Campus' }
]

var frontElement = posts.map(function (post) {
    return `<h1>  ${post.title}</h1>`
})


//  실습 

var images = [
    { h: '10px', w: '240px' },
    { h: '54px', w: '20px' },
    { h: '1098px', w: '2230px' },
]

var heights = images.map(function (image) {
    return image.h;
});

// 실습2 

var trips = [{ distance: 34, time: 10 },
{ distance: 34, time: 10 },
{ distance: 34, time: 10 },]


var speed = trips.map(function (trip) {
    return trip.distance / trip.time;

})

// 실습 3 

function pluck(array, property) {

    array.map(function(tag){

        return console.log(tag[property]);
    })
}

var paints = [
    { color: 'red', price: 100 }, { color: 'white', price: 100 }, { color: 'brown', price: 100 }, { color: 'navy', price: 100 },
]

pluck(paints, 'color');
