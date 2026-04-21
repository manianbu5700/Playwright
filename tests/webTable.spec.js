import { test, expect } from '@playwright/test'
test('webTable', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowData)
    await expect(rowData).toEqual([
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '61',
        '2011/04/25',
        '$320,800'
    ])

    const ColumData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    console.log(ColumData)
    await expect(ColumData).toContain('Yuri Berry')

    const data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    console.log(data)
    await expect(data).toEqual('San Francisco')
})