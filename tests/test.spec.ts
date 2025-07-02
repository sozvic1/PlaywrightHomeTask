import {test, expect} from '@playwright/test'
import {PageManeger} from '../page-object/pageManeger'
import { users} from '../models/userData';

test.beforeEach(async({page})=>{
    test.describe.configure({retries:1})
    //we can use this way for navigate our page
    //const pm = new PageManeger(page)
    //await pm.navigateTo().formUserProfileCreation()
    await page.goto('/')
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(page).toHaveTitle('User Profile Creation');    
})

test.describe('Login Tests - Parameterized', () => {
  for (const data of users) {
    test(`Check all mandatory fields with validation message  ${data.lastName}`, async ({ page }) => {
     const pm = new PageManeger(page) 
        
    //we can use this maneger for delegate work
    //await pm.navigateTo().formUserProfileCreation()

    await pm.formLayout().fillCreationFormWithAllMandatoryFields(data)
    //await pm.formLayout().submitInlineFormWithNameAndEmailAndCheckBox(randomFullName, randomEmail, false)
    await pm.formLayout().clickSubmitButton()
   
    page.once('dialog', async (dialog) => {    
    expect(dialog.message()).toBe(data.validationMessage)
    await dialog.accept()

  })
})
}})

test.describe('Login Tests - Parameterized', () => {
  for (const user of users) {
    test(`parametrise method with All Optional Fields ${user.firstName}`, async({page})=>{
    const pm = new PageManeger(page) 
        
    //we can use this maneger for delegate work
    //await pm.navigateTo().formUserProfileCreation()

    await pm.formLayout().fillCreationFormWithAllMandatoryFields(user)
    await pm.formLayout().fillCreationFormWithAllOptionalFields(user)
   
    page.once('dialog', async (dialog) => {    
    expect(dialog.message()).toBe(user.validationMessage)
    await dialog.accept()

  })
})
}})
