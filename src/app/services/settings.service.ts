import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IModal } from '../interfaces/IModal';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    /** Variable que indica si actualmente está el spinner visible */
    private loading: boolean = false;
    /** Subject para actualizar el observable */
    private loadingSub: BehaviorSubject<boolean> = new BehaviorSubject(this.loading);
    /** Observable al que suscribirse para recibir los cambios */
    public loadingObs: Observable<boolean> = this.loadingSub.asObservable();

    /** Array con las configuraciones de los modales actuales usado de referencia para actualizar el observable */
    private modals: Array<IModal> = [];
    /** Subject para actualizar el observable */
    private modalsSub: BehaviorSubject<Array<IModal>> = new BehaviorSubject(this.modals);
    /** Observable al que suscribirse para recibir los cambios */
    public modalsObs: Observable<Array<IModal>> = this.modalsSub.asObservable();


    constructor() { }


    /**
     * Muestra u oculta el spinner de cargando
     * 
     * @param loading True si se quiere mostrar el spinner, false si no
     */
    public setLoading(loading: boolean): void {
        this.loading = loading;
        this.loadingSub.next(this.loading);
    }

    /** 
     * Abre un modal nuevo, que se superpone al actual, en caso de que hubiera.
     */
    public openModal(modal: IModal): void {
        this.modals.push(modal);
        this.modalsSub.next(this.modals);
    }

    /**
     * Cierra el último modal abierto, preservando los anteriores, en caso de que hubiera.
     */
    public closeModal(): void {
        this.modals.pop();
        this.modalsSub.next(this.modals);
    }

    /**
     * Cierra todos los modales abiertos.
     */
    public closeAllModals(): void {
        this.modals = [];
        this.modalsSub.next(this.modals);
    }
}
