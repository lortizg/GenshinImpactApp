import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { ComponentsModule } from 'src/app/modules/components.module';
import { CharacterListPage } from './character-list.page';

@NgModule({
    imports: [
        CommonModule,
        CharacterListRoutingModule,
        FormsModule,
        ComponentsModule,
    ],
    declarations: [CharacterListPage],
})
export class HomeModule {}
