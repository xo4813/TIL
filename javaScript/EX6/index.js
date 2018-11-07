[].forEach()


//  ES5
var colors = ['red','blue','green'];

for (var i =0; i < colors.length; i++)
{
    console.log(colors[i]);
}

// ES6
colors.forEach(function(color){
    console.log(color)
})


var numbers =[1,2,3,4,5];
var sum = 0;

function add (number){
    sum += number;
}

numbers.forEach(add);

// ex 
console.log(sum);

spamMails = [];
spamMails.forEach(function(spamMail){
    deleteMail(spamMail);
})


// test 
function handlePosts(){
    var posts = [{id:23,title: 'aaaaaaaa'},{id:23,title: 'aaaaaaaa'},{id:23,title: 'aaaaaaaa'}];

    posts.forEach(function(post){
        savePost(post);
    })
}

// teset 2
var images = [{height: 10 , width:30},{height: 10 , width:30},{height: 10 , width:30}]

var areas = [];

images.forEach(function(imag){

    areas.push(imag.height * imag.width);
})

console.log(areas);

[].map();

[].filter();

[].find();

[].every();

[].some();

[].reduce();