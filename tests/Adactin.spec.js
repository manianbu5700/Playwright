import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel'

test('Page Object Modele', async ({ page }) => {
    const loginpage = new LoginPage(page)
    await loginpage.visitUrl()
    await loginpage.enterUserName()
    await loginpage.enterPassword()
    await loginpage.clickButton()
    const searchhotel = new SearchHotel(page)
    await searchhotel.enterLocation()

})