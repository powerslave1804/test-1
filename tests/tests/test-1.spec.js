import { test, epect } from "@playwright/test"


test.describe('Tets', () => {
    test('Test', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
    })
})