import { test } from "../fixture/mycustomFixture";
test.use({storageState:"./storagestate/login.json"})
test(`Leads test`,async({welcomPage,homePage,leadPage})=>{ 
    await welcomPage.clickCRM();
    await homePage.clickLeads();
    await leadPage.clickCreateLead()
})

//serial -->sequentially executes the test based the status of the previous test  -->test level