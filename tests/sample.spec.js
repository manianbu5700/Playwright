import { test } from '@playwright/test'
test('amazon login', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/iframe/')
    const frame = await page.frameLocator('//iframe[@src="https://vinothqaacademy.com/webtable/"]')
    await frame.locator('//input[@id="nameInput"]').fill('Manianbu5700')
    await page.waitForTimeout(3000)

    //To check how many frames in current pages
    const frameidentifier = page.frames().length
    console.log(frameidentifier)

    //To check field present in iframe or not
    const element = await page.frameLocator('iframe').locator('//input[@id="nameInput"]')
    if (await element.count() > 0) {
        console.log('Element is inside iframe')
    }

})