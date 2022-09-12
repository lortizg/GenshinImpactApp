import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IModal } from 'src/app/interfaces/IModal';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterContentInit {
    /** Objeto configuración del modal */
    @Input() conf: IModal | null = null;
    /** Profundidad (z-index) del modal */
    @Input() level: number | null = null;
    /** Para activar la animación de inicio */
    public active: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        setTimeout(() => {
            this.active = true;
            
            const acceptBtn: HTMLButtonElement | null = <HTMLButtonElement> document.getElementById(`general-modal-success-btn-${this.level}`);
            const cancelBtn: HTMLButtonElement | null = <HTMLButtonElement> document.getElementById(`general-modal-danger-btn-${this.level}`);
            if(acceptBtn) {
                acceptBtn.focus();
            } else if(cancelBtn) { 
                cancelBtn.focus();
            }
        }, 100);
    }

    /**
     * Manejador de eventos de 'Aceptar'
     * @param event 
     */
    public onAcceptClick = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();

        if(this.conf && this.conf.onAccept !== undefined) {
            this.conf.onAccept();
        }
    }

    /**
     * Manejador de eventos de 'Cancelar'
     * @param event 
     */
    public onCancelClick = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();

        if(this.conf && this.conf.onCancel !== undefined) {
            this.conf.onCancel();
        }
    }
}
