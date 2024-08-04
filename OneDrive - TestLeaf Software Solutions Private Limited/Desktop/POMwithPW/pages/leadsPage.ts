import { BrowserContext, Page } from "@playwright/test";
import { HomePage } from "./homePage";

export class LeadsPage extends HomePage{
    constructor(page:Page,context:BrowserContext)
  {
    super(page,context)
  }

async clickCreateLead(){
   await this.page.click("a[text=Create Leads]")
}

async clickFindLeads(){
    await this.page.click("a[text='Find Leads']")
}
}

