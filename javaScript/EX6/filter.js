var products = [
{ name : 'banana', type: 'fruit'},
{ name : 'banana', type: 'fruit'},
{ name : 'banana', type: 'fruit'},
{ name : 'banana', type: 'fruit'},
{ name : 'banana', type: 'fruit'},
]

var vegetables = products.filter(function(){
    return products
})


function commentsForPost(post,allComments){
    return allComments.filter(function(post){
        return 
    })
}


//실습 1 

var numbers = [1,2,3,56,57,688,789,21,5]
var bigNumber = numbers.filter(function(number){
    return number > 50
}) // 50초과

// 실습 2
 var users = [
    {id: 1, admin: true},
    {id: 2, admin: false},
    {id: 3, admin: true},
    {id: 4, admin: true},
    {id: 5, admin: false}
 ]

 var admin = users.filter(function(user){
    return user.admin;
 })


 //실습3 

 var numbers = [10,20,30];

 function reject(array, iterFunction){
    return array.filter(function(e){
        return !iterFunction(e);
    });
 }

 var lessThan15 = reject(numbers,function(number){
    return number > 15;
 })

 console.log(lessThan15); //10