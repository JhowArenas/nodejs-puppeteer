const puppeteer = require('puppeteer')

async function robo() {

    process.setMaxListeners(0)
    const browser = await puppeteer.launch({
        headless: true,
        // executablePath: 'google-chrome'
    });
    for (let i = 0; i < 200; i++) {
        const page = await browser.newPage();
        await page.goto('https://github.com/JhowArenas');
        await page.waitFor('1000')
        await page.close()

        console.log(`Loading.... ${i}`)
        // await page.screenshot({ path: 'ss/' + c + '.png' });
    }
    await browser.close();

}

robo();
