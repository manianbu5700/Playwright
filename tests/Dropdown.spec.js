import { test, expect } from '@playwright/test'
test('DropDown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    const singleDropDown = await page.locator('//select[@id="fruits"]')
    await singleDropDown.selectOption({ value: "3" })

    const multiDropDown = await page.locator('//select[@id="superheros"]')
    await multiDropDown.selectOption([{ label: "Aquaman" }, { value: "im" }, { index: 3 }])
    await page.waitForTimeout(3000)
})

//Dropdown
//index--------->{index:2}
//label---------->{label:"Apple"}
//value---------->{value:"0"}