export class SearchHotel {
    constructor(page) {
        this.page = page
        this.location = page.locator('//select[@id="location"]')


    }
    async enterLocation() {
        await this.location.selectOption({ value: "London" })
        await this.page.waitForTimeout(3000)
    }

}