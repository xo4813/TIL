// 1. <input> 태그안에 값을 잡는다. 
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');

// 2. API를 활용하여 데이터를 받는다 그리고 가공한다. 
const api_key = 'y7E2y3G82pX9go902ZFiMq42g6tTXi8T';

button.addEventListener('click', () => {
    let inputValue = document.querySelector('#js-input').value;
    getData(inputValue);
    // pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (event) => {
    let keyName = event.key;
    let inputValue = document.querySelector('#js-input').value;

    if (event.which === 13) {
        getData(inputValue);
        // pushToDOM(inputValue);
    }
});


const getData = (keyword) => {
    let URL = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${api_key}&limit=1`;

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', (e) => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData);
        pushToDOM(parsedData);
        console.log(parsedData.data[0]);
    });

}

const pushToDOM = (paredData) => {
    const resultArea = document.querySelector('#result-area');
    const DataSet = paredData.data;
    
    resultArea.innerHTML ="";
    DataSet.forEach((imgData) => {
        let imgURL = imgData.images.fixed_height.url;
        let imgTitle = imgData.title;
        resultArea.innerHTML += `<img src="${imgURL}"  alt=${imgTitle}>`;
    })
}
