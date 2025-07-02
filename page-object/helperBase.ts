import { Page } from "@playwright/test"
import { faker } from '@faker-js/faker'

export class HelperBase{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
    
}


  