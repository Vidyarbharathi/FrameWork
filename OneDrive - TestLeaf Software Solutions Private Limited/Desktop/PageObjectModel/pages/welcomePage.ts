import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage{

    async clickCRM(){
        
        await this.page.goto("http://leaftaps.com/opentaps/control/login")
        await this.page.locator("text=CRM/SFA").click()
        
    }

    async logOUt(){
        await this.page.locator("").click()
    }


}