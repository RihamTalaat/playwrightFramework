import {faker} from '@faker-js/faker'

export default class User{

    private  firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private access_token: string;
    private userID: string;


    constructor(){
      
        this.firstName=faker.person.firstName();
        this .lastName= faker.person.lastName();
        this.email= faker.internet.email();
        this.password= "hatem1234";

    }
    getFristName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getAccessToken(){
        return this.access_token;
    }
    setAccessToken(access_token:string){
        this.access_token=  access_token;
    }
    setUserID(userID :string){
        this.userID=userID;
    }

}