import { Locator, Page,BrowserContext, APIRequestContext } from "@playwright/test";
import User from "../modules/User";
import UserApi from '../api/UserApi';
import conf from '../playwright.config'


export default class RegesterPage{
    readonly page:Page;
    readonly firstname: Locator;
    readonly lastName: Locator; 
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly submit: Locator;
    
constructor(page:Page){
    this.page=page;
    this.firstname=this.page.locator('[data-testid="first-name"]');
    this.lastName=this.page.locator('[data-testid="last-name"]');
    this.email=this.page.locator('[data-testid="email"]');
    this.password=this.page.locator('[data-testid="password"]');
    this.confirmPassword=this.page.locator('[data-testid="confirm-password"]');
    this.submit=this.page.locator('[data-testid="submit"]');
}
async load(){
     await this.page.goto("/signup");
}
 async regester(user:User){
    
await this.firstname.fill(user.getFristName());
await this.lastName.fill(user.getLastName());
await this.email.fill(user.getEmail());
await this.password.fill(user.getPassword());
await this.confirmPassword.fill(user.getPassword());
await this.submit.click();

}
async regesterWithApis(user:User,context:BrowserContext,request:APIRequestContext){

       const response= await new UserApi(request).regester(user);
       console.log( await response.json());
       const responsebody = await response.json();
    
       const accessToken=responsebody.access_token;
       const userID=responsebody.userID;
       const firstName=responsebody.firstName;
       await this.addcookes(context,accessToken,firstName,userID);

       user.setAccessToken(accessToken);
       user.setUserID(userID);
    
   
}
async addcookes(context:BrowserContext,accessToken:string,firstName: string ,userID:string ){
    await context.addCookies([
    {
        name:"access_token",
        value:accessToken,
        url:conf.use?.baseURL
    },
    {
        name:"firstName",
        value:firstName,
        url:conf.use?.baseURL
    },
    {
        name:"userID",
        value:userID,
        url:conf.use?.baseURL
    },
    
    ])
}

}