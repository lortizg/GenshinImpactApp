import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { ComponentsModule } from 'src/app/modules/components.module';
import { RegisterPage } from './register.page';


@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ComponentsModule,
    ],
    declarations: [RegisterPage]
})
export class RegisterModule {}
