import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from 'src/app/modules/components.module';
import { LoginPage } from './login.page';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ComponentsModule,
    ],
    declarations: [LoginPage]
})
export class LoginModule {}
