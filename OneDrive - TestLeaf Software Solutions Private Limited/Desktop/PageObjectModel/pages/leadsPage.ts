import { RandomDataGeneration } from "../utils/randomData"
import { HomePage } from "./homePage"
export class LeadsPage extends HomePage {
     
     async enterCname(){
        //this.page  -->class proerty -->which userdefined
        await this.page.fill("locator",RandomDataGeneration.getcompanyName())
    }
}