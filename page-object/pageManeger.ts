import { Page } from "@playwright/test";
import {NavigationPage} from '../page-object/navigationPage'
import { UserProfileCreationPage } from "./userProfileCreationPage";
import { DatePickerPage } from "./datePickerPage";

export class PageManeger{
    
    private readonly page:Page
    private readonly navigationPage:NavigationPage
    private readonly userProfileCreationPage:UserProfileCreationPage
    private readonly datePickerPage:DatePickerPage    

    constructor(page:Page ){
        this.page=page
        this.navigationPage = new NavigationPage(this.page)
        this.userProfileCreationPage = new UserProfileCreationPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)  
    }

     navigateTo(){
        return this.navigationPage
    }

     formLayout(){
        return this.userProfileCreationPage
    }
    datePicker(){
        return this.datePickerPage
    }

}