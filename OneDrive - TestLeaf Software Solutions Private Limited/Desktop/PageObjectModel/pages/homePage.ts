import { WelcomePage } from "./welcomePage";


export class HomePage extends WelcomePage{

    async clickLeads(){
        await this.page.getByRole("link",{name:"Leads"}).click()
    }

    async clickAccount(){
        await this.page.getByRole("link",{name:"Account"}).click()
    }

}