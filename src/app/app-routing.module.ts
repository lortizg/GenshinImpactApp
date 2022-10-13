import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.page.module').then(m => m.HomeModule),
       // canActivate: [AuthGuard]
    },
    {
        path: 'characters',
        loadChildren: () => import('./pages/character-list/character-list-routing.module').then(m => m.CharacterListRoutingModule),
       // canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.page.module').then(m => m.RegisterModule),
      //  canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
