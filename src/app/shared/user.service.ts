import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
     addUserToDb(userData:any){
     
        this.http.post("https://myangpro-29ed9.firebaseio.com/myData.json/",userData).subscribe(response => {
            console.log(response);
        })
    }
    public loadUsers():Observable<any[]>{
        const url = "https://myangpro-29ed9.firebaseio.com/myData.json";
        return this.http.get<any[]>(url);
    }

    constructor(private http:HttpClient){}

}