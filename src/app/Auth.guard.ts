import { CanActivate, ActivatedRouteSnapshot,  RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppValidation } from './appValidation.Service';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private appvalid :AppValidation,private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
       
        return true;
       
    }
}