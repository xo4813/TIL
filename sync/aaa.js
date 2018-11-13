const http = require("http");
const _ = require("underscore");

function getLottoData(drwNo) {
  const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

  let lottoData = {};

  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let buff = "";

      res.on("data", chunk => {
        buff += chunk;
      });

      res.on("end", () => {
        lottoData = JSON.parse(buff);

        resolve(lottoData);
      });
    });
  });
}

const realNumber = [];
let bonusNumber = 0;

function fundLuckNumbers(lottoData = {}) {
  for (let index = 5; index < 11; index++) {
    var first_value = lottoData[Object.keys(lottoData)[index]];
    realNumber.push(first_value);
  }

  bonusNumber = lottoData[Object.keys(lottoData)[0]];
}
const numbers = _.range(1, 46);
const myNumbers = _.sample(numbers, 6).sort();

getLottoData(800).then(lottoData => {
  fundLuckNumbers(lottoData);

  let num = 0;
  let count = 0;
  let start = new Date().getTime();

  while (num != 1) {
    num = reselt(myNumbers);
    count++;
  }
  let end = new Date().getTime();

  let total = end - start;
  console.log(`${num} 등`);
  console.log(`${count} 번`);
  console.log(`${total / 1000}초`);
});

function reselt(myNumbers) {
  let res = 0;

  myNumbers = _.sample(numbers, 6).sort();

  var arr2 = myNumbers.filter(function(n) {
    return realNumber.indexOf(n) >= 0;
  });

  if (arr2.length == 3) {
    res = 5;
  } else if (arr2.length == 4) {
    res = 4;
  } else if (arr2.length == 5) {
    var arr3 = myNumbers.filter(function(n) {
      return realNumber.indexOf(n) == bonusNumber;
    });

    if (arr3.length > 0) {
      res = 2;
    } else {
      res = 3;
    }
    //2등이랑 비교
  } else if (arr2.length == 6) {
    res = 1;
  }

  return res;
}
