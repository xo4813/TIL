var computers = [
    { name: 'macbook--air', ram: 16 },
    { name: 'gram', ram: 8 },
    { name: 'series9', ram: 32 },
]

var everyComputerAvailable = true;
var someComputersAvailable = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        everyComputerAvailable = false;
    } else {
        someComputersAvailable = true;
    }
}

//EX 6 

//모두가 포홤되어야 TRUE
var everyLaptopAvailable = computers.every(function(computer){
    return computer.ram > 16;
})

// 한명이라도 포함될 경우  TRUE
var someLaptopAvailable = computers.some(function(computer){
    return computer.ram > 16;
})

// 실습 1 

var users = [
    {id: 21 , submit: true},
    {id: 33 , submit: false},
    {id: 712 , submit: true},
]

var allSubmited = users.every(function(user){
    return user.submit;
});

// 실습 2 

var requests = [
    {url: '/photos', status: 'complete'},
    {url: '/albums', status: 'pending'},
    {url: '/users', status: 'failed'}
]

var inProgress = requests.some(function(request){
    return user.status == 'pending';
});