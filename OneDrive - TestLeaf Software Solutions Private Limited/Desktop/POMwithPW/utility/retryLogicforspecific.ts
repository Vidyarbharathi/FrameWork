import {test as baetest} from '@playwright/test'


export const test=baetest.extend({
 page:async({page},use,testInfo)=>{
   page.delayedFill= async(selector:string,data:string)=>{
    if(testInfo.retry>0){
         await page.waitForTimeout(3000)
    }
    await page.fill(selector,data)
   }

   page.delayedClick=async(selector:string)=>{
       await page.click(selector)   
       if(testInfo.retry>0){
        await page.waitForTimeout(2000)
       }

       await page.click(selector)

   }



 }



})

    







