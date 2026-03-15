import { APIRequestContext, Locator, Page, expect } from "@playwright/test";
import TodoApi from "../api/TodoApi"
import User from "../modules/User";

export default class TodoPage{
      readonly page:Page;
      readonly welcomeMeassage: Locator; 
      readonly addTodoIcon:Locator;
      readonly todoFeild:Locator;
      readonly createTodoButton:Locator;
      readonly itemTitle:Locator;
      readonly deleteIcon:Locator;
      readonly noTodoMessage:Locator;



constructor(page: Page){
    this.page=page;
    this.welcomeMeassage=this.page.locator('[data-testid="welcome"]');
    this.addTodoIcon=this.page.locator('[data-testid="add"]');
    this.todoFeild=this.page.locator('[data-testid="new-todo"]');
    this.createTodoButton=this.page.locator('[data-testid="submit-newTask"]');
    this.itemTitle=this.page.locator('[data-testid="todo-text"]').nth(0);
    this.deleteIcon=this.page.locator('[data-testid="delete"]');
    this.noTodoMessage=this.page.locator('[data-testid="no-todos"]');


}
async load(){
await this.page.goto("/todo");
}
validateOnWelcomeMessage(){
    expect (this.welcomeMeassage).toBeVisible;
}
async addtodo(itemTitle: string){
await this.addTodoIcon.click();
await this.todoFeild.fill(itemTitle);
await this.createTodoButton.click();
// await expect(this.itemTitle).toContainText(itemTitle);
}
getItemTitle(){
    return this.itemTitle;
}
getNoTodoMessage(){
    return this.noTodoMessage;
}

async deleteTodo(){
await this.deleteIcon.click();
}

async addTodoWithAPIs(user: User, request:APIRequestContext){
    
 const respons=await new TodoApi(request).addTodo(user)
 console.log(await respons.json());
}

}