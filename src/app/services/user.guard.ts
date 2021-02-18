import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { ApiService } from "./api.service"


@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.apiService.getCurrentUser()) {
            return true;
        }
        else {
            this.router.navigate(['auth']);
            return false;
        }
    }
}
