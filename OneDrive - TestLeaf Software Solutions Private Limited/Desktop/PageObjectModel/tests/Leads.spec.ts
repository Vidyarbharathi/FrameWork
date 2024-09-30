import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";




test.use({storageState:'loginStorage.json'})

test(`Leads Module`,async({page,context})=>{    
const hp=new HomePage(page,context)  
   await hp.clickCRM()
   await hp.clickLeads()
 })
