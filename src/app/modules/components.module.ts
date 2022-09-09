import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { ModalComponent } from '../components/modal/modal.component';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';



const modules = [
    /** Components Modules Here */
    ModalComponent,
    PrimaryButtonComponent
];

@NgModule({
    declarations: [
        ...modules
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        MaterialModule,
        ...modules
    ],
})
export class ComponentsModule { }
