// 1. <input> 태그안에 값을 잡는다. 
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#js-input').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (event) => {
    const keyName = event.key;
    const inputValue = document.querySelector('#js-input').value;

    if (event.which === 13) {
        pushToDOM(inputValue);
    }
});


// 2. API를 활용하여 데이터를 받는다 그리고 가공한다. 
const api_key = 'poVS1uOtz00IAJDRSF89PjCcwE78rWHP';
// 3. GIF 파일들을 index.html 에 밀어 넣는다.
let keyword = 'cat';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${api_key}`;

const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (e) => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToDOM(parsedData);
    console.log(parsedData.data[0]);
});


const getData = (keyword) => {

}

const pushToDOM = (paredData) => {

    const resultArea = document.querySelector('#result-area');
    const DataSet = paredData.data;

    DataSet.forEach((imgData) => {
        let imgURL = imgData.images.fixed_height.url;
        let imgTitle = imgData.title;
        resultArea.innerHTML += `<img src="${imgURL}"  alt=${imgTitle}>`;
    })

    // for (var i = 0; i < paredData.data.length; i++) {
    //     //resultArea.innerHTML += `<img src="${paredData.data[i].images.fixed_height.url}">`
    // }
}
