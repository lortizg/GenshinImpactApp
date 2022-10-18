import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CharacterListRoutingModule } from './character-detail-routing.module';
import { ComponentsModule } from 'src/app/modules/components.module';
import { CharacterDetailPage } from './character-detail.page';

@NgModule({
    imports: [
        CommonModule,
        CharacterListRoutingModule,
        FormsModule,
        ComponentsModule
    ],
    declarations: [CharacterDetailPage],
})
export class CharacterDetailModule {}
