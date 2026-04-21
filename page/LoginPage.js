export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')

    }
    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUserName() {
        await this.username.fill('Victor123')
    }
    async enterPassword() {
        await this.password.fill('Victor@123')
    }
    async clickButton() {
        await this.button.click()
    }
}