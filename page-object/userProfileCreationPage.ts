import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { UserData } from '../models/userData';

export class UserProfileCreationPage extends HelperBase{
    
    constructor (page:Page){
        super(page)
    }

    async fillCreationFormWithAllMandatoryFields(tesdata:UserData){      
        await this.page.locator('#firstName').fill(tesdata.firstName)
        await this.page.locator('#lastName').fill(tesdata.lastName)
        await this.page.locator('#email').fill(tesdata.email)
        await this.page.locator('#password').fill(tesdata.password)
        await this.page.locator('#confirmPassword').fill(tesdata.password)        
    }

    async fillCreationFormWithAllOptionalFields(tesdata:UserData){
        if(tesdata.phoneNumber!=null){
        await this.page.locator('#phone').fill(tesdata.phoneNumber.toString())
        }
        if(tesdata.address!=null){
        await this.page.locator('#address').fill(tesdata.address)
        }
        if(tesdata.linkedInURL!=null){
        await this.page.locator('#linkedIn').fill(tesdata.linkedInURL)
        }
        if(tesdata.gitHubURL!=null){
        await this.page.locator('#github').fill(tesdata.gitHubURL)
        }
        if(tesdata.dateOfBirth!=null){
        await this.page.locator('#dob').fill(tesdata.dateOfBirth?.toDateString())
        } 
    }
    
    async checkGenderRadioButton(gender:string){
        if(gender == 'Male') await this.page.locator('#male').check({force:true})
        if(gender == 'Female') await this.page.locator('#female').check({force:true})
        if(gender == 'Prefer not to say') await this.page.locator('#preferNotToSay').check({force:true})           
    }

    async clickSubmitButton(){
        await this.page.click('input[type="submit"]')
    }
}

