import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { ModalComponent } from '../components/modal/modal.component';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { PrimaryInputComponent } from '../components/primary-input/primary-input.component';



const modules = [
    /** Components Modules Here */
    ModalComponent,
    PrimaryButtonComponent,
    PrimaryInputComponent
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
