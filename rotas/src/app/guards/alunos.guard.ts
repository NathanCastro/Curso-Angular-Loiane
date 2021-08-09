import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class AlunosGuard implements CanActivateChild{
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
    
    // console.log(route);
    // console.log(state); 

    console.log('AlunosGuard: Guarda de rota Filha'); 

    if(state.url.includes('editar')){
        // alert('Usuário sem acesso');
        // return false;
    }
    return true;
    }
    
}