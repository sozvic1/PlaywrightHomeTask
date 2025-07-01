import {test, expect} from '@playwright/test'
import {PageManeger} from '../page-object/pageManeger'
import { faker } from '@faker-js/faker'
import { UserData } from '../models/userData';

const users: UserData[] = [
  { firstName: faker.person.firstName(), lastName: faker.person.lastName(), email:`${faker.person.firstName().replace(' ', '')}${faker.number.int(1000)}@test.com`, password:'password',gender:'Male',dateOfBirth:},
  { firstName: 'MAx', lastName: 'Ivanov', email:'soz@gmail.com', password:'qwerty123',},
];

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

for (const user of users) {
test('parametrise method @smoke @regression', async({page})=>{
    const pm = new PageManeger(page) 
        
    //we can use this maneger for delegate work
    //await pm.navigateTo().formUserProfileCreation()

    await pm.formLayout().fillCreationFormWithAllMandatoryFields(user)
    await pm.formLayout().submitInlineFormWithNameAndEmailAndCheckBox(randomFullName, randomEmail, false)
   
    page.once('dialog', async (dialog) => {    
    expect(dialog.message()).toBe('First name must be filled out')
    await dialog.accept()

  })
  
})}
    
  



