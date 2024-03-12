import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient ) { }

  userInfo:any = {}

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/`;


  getRegister(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + `signup`, userData)
  }

  getLogin(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + `signin`, userData)
  }

  decodeToken():void{
    const encode = localStorage.getItem('eToken')
    if (encode != null) {
      const decode = jwtDecode(encode);
      this.userInfo = decode
    }
  }




}
