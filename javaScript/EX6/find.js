var users = [{ name: 'Tony stark' },
{ name: 'Steve Rogers' },
{ name: 'Thor' },
]

var user;

for (var i = 0; i < users.length; i++) {

    if (users[i].name === 'Thor') {
        user = user[i];
        break;
    }
}

// find는 자료구조에 같은게 여러게 있더라도 한개만 찾아서 리턴함
var user = users.find(function (user) {
    return users.name === 'Tony stark';
});

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Mercedes'),
    new Car('HK'),
    new Car('CARE'),
    new Car('Mercedes'),
];

var car = cars.find(function () {
    return car.model === 'HK';
});


var users = [
{ id: 1, admin: true },
{ id: 2, admin: false },
{ id: 3, admin: false },
]

var admin = users.find(function(user){
    return user.admin;
});

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function(account){
    return accounts.balance === 12;
});


// 실습3 

var ladders = [ {id :1, height : 20 },
    {id :2, height : 30 },
    {id :3, height : 25 },]

function findWhere(array,standard){

    var property = Object.keys(standard)[0];
    console.log(property);

     array.find(function(e){
            return e[property] == standard[property];
    })
}

findWhere(ladders, {height: 20});
