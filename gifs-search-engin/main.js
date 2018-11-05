// 1. <input> 태그안에 값을 잡는다. 
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');

button.addEventListener('click',() => {
    const inputValue = document.querySelector('#js-input').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keyup',(event) => {
    const keyName = event.key;
    const inputValue = document.querySelector('#js-input').value;
   
    if(event.which === 13)
    {
        pushToDOM(inputValue);
    }
});


// 2. API를 활용하여 데이터를 받는다 그리고 가공한다. 

// 3. GIF 파일들을 index.html 에 밀어 넣는다.

const pushToDOM = (data) => {
    const resultArea = document.querySelector('#result-area');
    resultArea.innerHTML = data;
}
