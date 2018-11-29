const { Builder, By, Key, until } = require('selenium-webdriver');
let texts;

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    await driver.get('http://www.pask.or.kr/b_pask/bbs/board.php?bo_table=contest');

    texts = await driver.findElements(By.css('tbody td.left a'));

  } finally {

    texts.forEach(element => {

      let a = element

      console.log(a);
      
    });

    await driver.quit();
  }
};

example()