const promise = new Promise((resolve, reject) => {

    const number = Math.floor(Math.random() * 100);

    if (number % 2 === 1)  resolve({ id: 1, email: "asd" }) 
    else reject(new Error('Error...'))
});


promise
    .then(user => console.log(user))
    .catch(error => console.log(error));