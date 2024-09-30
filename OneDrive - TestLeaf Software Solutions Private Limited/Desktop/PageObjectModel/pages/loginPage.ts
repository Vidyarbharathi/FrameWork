import {BrowserContext, Locator, Page} from '@playwright/test'
import { PWWrapper } from '../utils/wrapperMethod'
import path from 'path'
import fs from 'fs'
import { parse } from "csv-parse/sync";

//import { WapperImpl } from '../utils/wroapperImpl'

export class LoginPage {

    page:Page
    context:BrowserContext
    username:Locator
    password:string

    
     constructor(page:Page,context:BrowserContext){
      //  super(page)       
      this.page=page 
      this.context=context
      this.username=this.page.locator("#username")
      this.password="#password"

     }
    
//    userData=parse(fs.readFileSync(path.join(__dirname,"../data/loginData.csv"),'utf-8'),{
//     columns:true, // to make the first row as header
//     skip_records_with_empty_values:true
//   })
  

     async navigate(){
        //this.page  -->class proerty -->which userdefined
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
    }

    // async doLogin(){
    //     await this.page.fill("#username",this.userData[0].Username)
    //     await this.page.fill("#password",this.userData[0].password)
    //     await this.page.click(".decorativeSubmit")
    //    // await this.typeAndEnter()
    // } 

    async doLogin(username:string,pass:string){
        await this.username.fill(username)
        await this.page.fill(this.password,pass)
        await this.page.click(".decorativeSubmit")
       // await this.typeAndEnter()
    } 

    async verifyURL(){
        const title=await this.page.title();
        await this.page.context().storageState({path:"login.json"})
        return title;
        
    }

}