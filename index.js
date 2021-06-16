const puppeteer = require('puppeteer')

async function robo(c) {

    process.setMaxListeners(0)

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/');

    console.log('Loading... ')
    await page.screenshot({ path: 'ss/' + c + '.png' });
    console.log('Printado');
    await browser.close();

}

for (let i; i < 3; i++) {
    robo(i);
}