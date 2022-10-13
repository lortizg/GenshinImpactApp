import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit, OnChanges {
    /** Texto del botón */
    @Input() public text: string = '';
    /** Id del botón */
    @Input() public id: string = '';
    /** Tipo del botón: 'button' o 'submit' */
    @Input() public type: string = '';
    /** Indica si el botón está deshabilitado */
    @Input() public disabled: boolean = false;
    /** Nombre del mat-icon a renderizar con el botón */
    @Input() public icon: string = '';
    /** Clase adicional del componente. 'success' o 'danger' son dos valores posibles. */
    @Input() public className: string = '';
    /** Estilos del botón */
    @Input() public styles: any = {};
    /** 'Emisor de evento' del evento 'click' */
    @Output() public onClick = new EventEmitter<MouseEvent>();

    constructor() { }

    public ngOnInit(): void {}

    public ngOnChanges(changes: SimpleChanges): void {}

    /**
     * Manejador de eventos 'click' del botón
     */
    public onButtonClick = (event: MouseEvent) => {
        this.onClick.emit(event);
    }
}
