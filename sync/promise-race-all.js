const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Fetching from Bank1...');
        const response = {bank: 1, delayed: false};
        resolve(!response.delayed)
    },1000)
})


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Fetching from Bank2...');
        const response = {bank: 2, delayed: true};
        resolve(!response.delayed)
    },1400)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Fetching from Bank3...');
        const response = {bank: 3, delayed: false};
        resolve(!response.delayed)
    },2000)
})

Promise.all([p1,p2,p3])
    .then(result => console.log(result));

