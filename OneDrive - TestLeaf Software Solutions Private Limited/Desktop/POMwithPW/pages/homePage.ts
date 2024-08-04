import { BrowserContext, Page } from "@playwright/test";
import { WelcomePage } from "./welcomePage";



export class HomePage extends WelcomePage{

    constructor(page:Page,context:BrowserContext){
        super(page,context)
    }

    async clickLeads(){
        await this.page.click("a[text='Leads']")
    }
    
    async clickAccounts(){
        await this.page.click("a[text='Accounts']")
    }

    async clickOpportunity(){
        await this.page.click("")
    }

    



}