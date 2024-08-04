


//fillandEnter
//clearAndtype
//fillandtab

import test, { BrowserContext, Page,expect } from "@playwright/test";

export abstract class PlaywrightWrapper{


    page:Page
    context:BrowserContext
    constructor(page:Page,context:BrowserContext){
        this.page=page;
        this.context=context
    }

    //fill(locator,value)
    async  clearAndType(locator:string,data:string,name:string,type:string){
        test.step(`The ${name} ${type} is clicked`,async()=>{   //step based information to the report
        await this.page.locator(locator).clear();
        await this.page.locator(locator).fill(data);
        })
    }

    async  typeAndEnter(locator:string,data:string,name:string,type:string){
        test.step(`The ${name} ${type} enterd the ${data} successfully `,async()=>{
        await this.page.locator(locator).fill(data);
        await this.page.focus(locator)
        await this.page.keyboard.press("Enter")
        })
    }


    async clickOnElement(locator:string){
        await this.page.locator(locator).click({timeout:2000});
    }

    async clickwithDalay(locator:string){ //function works for rety config
        await this.page.delayedClick(locator)
    }

    async handleWindow(){

    }
    
async verifyPagetitle(titleName:string){
    expect(await this.page.title()).toContain(titleName)
}



}
