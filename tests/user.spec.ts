import {expect, test} from '@playwright/test'
import {faker} from '@faker-js/faker'
import User from '../modules/User'
import PageMangment from '../pags/PageMangment';








test("should regester to todo website",async({page})=>{

   const user = new User();

    

const pm= new PageMangment(page);
await pm.getRegesterPage().load();
await pm.getRegesterPage().regester(user);
await pm.getTodoPage().validateOnWelcomeMessage();
await page.pause();

})