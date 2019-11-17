import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public cookieService: CookieService, public router: Router) {}
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate() {
     console.log('in auth guard');
        // console.log(this.cookieService.get('jwtToken'));      // get cookie
        if (this.cookieService.get('jwtToken') == null || this.cookieService.get('jwtToken').length < 10) {     // chacking cookie are exists or not
            this.router.navigate(['/']);      // if cookie is not exists return the root page or login page
        } else return true;         // if cookie is exists return that page which you want
        return false;         // error or root page
    }

}
