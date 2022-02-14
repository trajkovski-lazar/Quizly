import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class IsAuthenticated implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if (token) {
      if (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register' || route.routeConfig?.path === 'forgot-password' ||
        route.routeConfig?.path === 'reset-password') {

        this.router.navigateByUrl('/categories');
        return false;
      }
      return true;
    }
    else {
      if (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register' || route.routeConfig?.path === 'forgot-password' ||
        route.routeConfig?.path === 'reset-password') {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}

export default IsAuthenticated;