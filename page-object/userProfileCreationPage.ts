import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { UserData } from '../models/userData';

export class UserProfileCreationPage extends HelperBase{
    
    constructor (page:Page){
        super(page)
    }

    async fillCreationFormWithAllMandatoryFields(tesdata:UserData){   
        if(tesdata.firstName!=null){
        await this.page.locator('#firstName').fill(tesdata.firstName)
        }   
        if(tesdata.lastName!=null){
        await this.page.locator('#lastName').fill(tesdata.lastName)
        }
        if(tesdata.email!=null){
        await this.page.locator('#email').fill(tesdata.email)
        }
        if(tesdata.password!=null){
        await this.page.locator('#password').fill(tesdata.password)
        }
        if(tesdata.password!=null){
        await this.page.locator('#confirmPassword').fill(tesdata.password)  
        }
        
              
    }

    async fillCreationFormWithAllOptionalFields(tesdata:UserData){
        if(tesdata.gender!=null){
        await this.checkGenderRadioButton(tesdata.gender)
        }
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
        await this.page.locator('#dob').fill(tesdata.dateOfBirth)
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

