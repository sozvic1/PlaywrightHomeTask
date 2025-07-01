import { Page,Locator, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatePickerPage extends HelperBase{
     
     constructor(page:Page){
       super(page)
     }

     async generateDataOfBirthday(start:number,end:number){
       const data = (await this.randomDate(new Date(start, 0, end), new Date())).getDate().toLocaleString("En-US")       
     }

     
    private async randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }
    
}
     
