import {test,  expect } from "@playwright/test"
import { LoginPage } from "../pages/loginPage"

import path from 'path'
import fs from 'fs'
import { parse } from "csv-parse/sync";
import { RandomDataGeneration } from "../utils/randomData";
   
const userData=parse(fs.readFileSync(path.join(__dirname,"../data/loginData.csv"),'utf-8'),{
    columns:true, // to make the first row as header
    skip_records_with_empty_values:true
  })
  
userData.forEach(value=>{
test(`Login ${value.TestcaseId}`,async({page,context})=>{
    const lp=new LoginPage(page,context)
    await lp.navigate()
    await lp.doLogin(value.Username,value.password)
    const title=await lp.verifyURL()
    console.log(RandomDataGeneration.getFirstname())
    expect(title).toContain("Leaftaps")
})
})