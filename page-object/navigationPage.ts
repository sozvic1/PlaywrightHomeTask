import { Page,Locator } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase{
   
    readonly formLayoutsMenuItem:Locator  

    constructor(page: Page){
        super(page)       
        this.formLayoutsMenuItem = page.getByText("User Profile Creation")       
    }

    async formUserProfileCreation()
    {        
        await this.page.goto('https://qa-assessment.pages.dev/')
    }

}