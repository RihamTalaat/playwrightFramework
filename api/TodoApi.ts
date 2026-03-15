import { APIRequestContext } from "@playwright/test";
import User from "../modules/User";

export default class TodoApi{

    private request :APIRequestContext;

    constructor(request :APIRequestContext){
        this.request=request;

    }

   async  addTodo(user:User){
    return     await this.request.post('api/v1/tasks',{
    data:{
        item: "play",
        isCompleted: false
    },
    headers:{
        authorization: `Bearer ${user.getAccessToken()}`
    }
})


    }


}