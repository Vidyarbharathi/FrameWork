//array of obj for all pages
//loginPage, welcomePage, homePage,LeadsPage
import { test as baseTest } from '@playwright/test'
import { HomePage } from "../pages/homePage"
import { LeadsPage } from "../pages/leadsPage"
import { LoginPage } from "../pages/loginPage"
import { WelcomePage } from "../pages/welcomePage"

type myClassFixtures = {
    loginPage: LoginPage
    welcomPage: WelcomePage
    homePage: HomePage
    leadPage: LeadsPage
}
export const test = baseTest.extend<myClassFixtures>({

    loginPage: async ({ page, context }, use) => {
        const lp = new LoginPage(page, context)
        await lp.navigate()
        await lp.enterCredentials("DemosalesManger", "crmsfa")
        await lp.clickLogin()
        use(lp)
    },
    welcomPage: async ({ page, context }, use) => {
        const wp = new WelcomePage(page, context)
        use(wp)
    },
    homePage: async ({ page, context }, use) => {
        const hp = new HomePage(page, context)
        use(hp)
    },
    leadPage: async ({ page, context }, use) => {
        const leadp = new LeadsPage(page, context)
        use(leadp)
    },
})



