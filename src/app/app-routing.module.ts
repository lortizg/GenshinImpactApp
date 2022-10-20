import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.page.module').then(m => m.HomeModule),
       // canActivate: [AuthGuard]
    },
    {
        path: 'characters',
        loadChildren: () => import('./pages/character-list/character-list.page.module').then(m => m.CharacterListModule),
       // canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.page.module').then(m => m.RegisterModule),
      //  canActivate: [AuthGuard]
    },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
