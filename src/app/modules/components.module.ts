import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { ModalComponent } from '../components/modal/modal.component';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { PrimaryInputComponent } from '../components/primary-input/primary-input.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { GridIcon } from '../components/icons/grid-icon.component';
import { GridFullIcon } from '../components/icons/grid-full-icon.component';
import { ListIcon } from '../components/icons/list-icon.component';


const modules = [
    /** Components Modules Here */
    ModalComponent,
    PrimaryButtonComponent,
    PrimaryInputComponent,
    TopBarComponent,
    FilterPipe,
    GridIcon,
    GridFullIcon,
    ListIcon
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
