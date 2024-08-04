//pageClass represents the webpage of application of every navigation
import {BrowserContext, Page} from '@playwright/test'
import { PlaywrightWrapper } from '../utility/playwrightWrapper';
import {URLConstants} from '../constants/urlConstants'

export class LoginPage extends PlaywrightWrapper{
    page:Page;
    context:BrowserContext
 
    public locators={
        username:"#username",
        password:"#password",
        login:".decorativeSubmit"
    }    
    constructor(page:Page,context:BrowserContext){
       super(page,context)
    }
    //create methods for evry action in the webPage
    async navigate(){
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
    }
    async enterCredentials(uname:string,pwd:string){
       await this.typeAndEnter(this.locators.username,uname,"Username"," Textfield")
       await this.typeAndEnter(this.locators.password,pwd,"Password"," Textfield")
    }
    async clickLogin(){
        await this.clickwithDalay(this.locators.login)
        await this.verifyPagetitle("Leaftaps")
    }

  
}