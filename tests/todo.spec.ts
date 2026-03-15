import {expect, test} from '@playwright/test'

import User from '../modules/User';
import UserApi from '../api/UserApi';
import TodoApi from '../api/TodoApi';

import PageMangment from '../pags/PageMangment';

test("should add a todo website",async({page, request,context})=>{
    const user = new User();
const pm=new PageMangment(page);
pm.getRegesterPage().regesterWithApis(user,context,request);
await pm.getTodoPage().load();
await pm.getTodoPage().addtodo("playwrite");
await expect(pm.getTodoPage().getItemTitle()).toContainText('playwrite');



//await page.pause();
})
test("should delete a todo website",async({page,request,context})=>{
const user = new User();
 const pm=new PageMangment(page);
 await pm.getRegesterPage().regesterWithApis(user,context,request);
 await pm.getTodoPage().addTodoWithAPIs(user,request);
 await pm.getTodoPage().load();
 await pm.getTodoPage().deleteTodo();
 await expect(pm.getTodoPage().getNoTodoMessage()).toContainText('No Available Todos');



//await page.pause();
})