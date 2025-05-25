import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page'
import homePage from '../pageobjects/home.page'
import profilePage from '../pageobjects/profile.page'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente@ebac.com.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeThruth()
        await driver.pause(1000)
    })
})

