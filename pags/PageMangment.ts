import { Page } from '@playwright/test';
import RegesterPage from '../pags/RegesterPage';
import TodoPage from '../pags/TodoPage';

export default class PageMangment{

    readonly page:Page;
    readonly regesterPage: RegesterPage;
    readonly todoPage:TodoPage;


    constructor(page:Page){

        this.page=page;
        this.regesterPage= new RegesterPage(this.page);
        this.todoPage=new TodoPage(this.page);
    }
  getRegesterPage() {
    return this.regesterPage;
  }
  getTodoPage() {
    return this.todoPage;
  }
  


}