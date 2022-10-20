import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/modules/components.module';
import { NotfoundComponent } from './notfound.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule
    ],
    declarations: [NotfoundComponent],
})
export class NotFoundModule {}
