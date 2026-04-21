import { test } from '@playwright/test'
test('WindowHandling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')
    // await page.pause()
    // await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.waitForTimeout(3000)

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQFW4MVJ"]//descendant::h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″)")]')
    ])
    //const arr=[10,20,30,40]
    // const [a, b] = arr
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)

})

//Dynamic xpath

//ancestor
//parent
//preceding-sibling
//child
//following-sibing
//descendant

//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]
//following-sibling::div[@data-asin="B0FQFW4MVJ"]
//descendant::h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″)")]