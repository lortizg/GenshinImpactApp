import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

import { IModal } from './interfaces/IModal';

import { SettingsService } from './services/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [trigger('simpleFadeAnimation', [
        // the "in" style determines the "resting" state of the element when it is visible.
        state('in', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [style({ opacity: 0 }), animate(300)]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave', animate(300, style({ opacity: 0 })))
    ])]
})
export class AppComponent implements OnInit, OnDestroy {
    /** Suscripción al loader del servicio de ajustes para que cualquier componente pueda lanzar el spinner de carga */
    private loadingSubscription!: Subscription;
    /** True para renderizar spinner de carga */
    public loading: boolean = false;

    /** Suscripción al servicio de modales para que cualquier componente pueda lanzarlos */
    private modalSubscription!: Subscription;
    /** Lista de modales mostrados actualmente */
    public modals: Array<IModal> = [];


    constructor(private settings: SettingsService) {}

    ngOnInit(): void {
        // Nos suscribimos al observable loading del settings service para mostrar el spinner de carga
        this.loadingSubscription = this.settings.loadingObs.subscribe((loading: boolean) => this.loading = loading);

        // Nos suscribimos al observable del modal service para renderizar modales
        this.modalSubscription = this.settings.modalsObs.subscribe((modals: Array<IModal>) => this.modals = modals);
    }

    ngOnDestroy(): void {
        // Nos dessuscribimos de los diferentes observables
        if(this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }

        if(this.modalSubscription) {
            this.modalSubscription.unsubscribe();
        }
    }
}
