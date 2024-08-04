import { LoginPage } from "./loginPage";
import {BrowserContext, expect, Page} from '@playwright/test'

export class WelcomePage extends LoginPage{
        constructor(page:Page,context:BrowserContext){
        super(page,context)
    }
    async clickCRM(){   
        await this.page.goto("http://leaftaps.com/opentaps/control/login")
        await this.page.click("text=CRM/SFA")

    }
    async clickLogout(){
       // await this.page.click("#Logout")
    }

}


//test() ->2 to 3 funtion -->validatat, invalidat , crmclick, logout