import {Page} from '@playwright/test'
 
declare module '@playwright/test'{
    interface Page
  {
      delayedFill:(selector:string,data:string)=>Promise<void>;
      delayedClick:(selector:string)=>Promise<void>
      
  }
  }