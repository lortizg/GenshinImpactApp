import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit, OnChanges {
    /** Texto del botón */
    @Input() text: string = '';
    /** Id del botón */
    @Input() id: string = '';
    /** Tipo del botón: 'button' o 'submit' */
    @Input() type: string = '';
    /** Indica si el botón está deshabilitado */
    @Input() disabled: boolean = false;
    /** Nombre del mat-icon a renderizar con el botón */
    @Input() icon: string = '';
    /** Clase adicional del componente. 'success' o 'danger' son dos valores posibles. */
    @Input() className: string = '';
    /** Estilos del botón */
    @Input() styles: any = {};
    /** Callback fired when onClick fired */
    @Input() onClick: (event: MouseEvent) => void | null = null;

    constructor() { }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {}

    /**
     * Manejador de eventos 'click' del botón
     */
    public onButtonClick = (event: MouseEvent) => {
        if(this.onClick) {
            this.onClick(event);
        }
    }
}
