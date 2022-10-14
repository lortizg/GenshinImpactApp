import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListPage } from './character-list.page';


const routes: Routes = [{
    path: '',
    component: CharacterListPage
}, 
{
    path: ':name',
    loadChildren: () => import('../character-detail/character-detail.page.module').then(m => m.CharacterDetailModule),
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharacterListRoutingModule {}
