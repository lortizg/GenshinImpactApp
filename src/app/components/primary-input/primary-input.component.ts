import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'primary-input',
    templateUrl: './primary-input.component.html',
    styleUrls: ['./primary-input.component.scss']
})
export class PrimaryInputComponent implements OnInit, OnChanges {
    /** Label del input (opcional) */
    @Input() public label: string = '';
    /** Valor del input */
    @Input() public value: string = '';
    /** Mensaje de error a mostrar (cadena vacía si no hay error que mostrar) */
    @Input() public error: string = '';
    /** Id del input */
    @Input() public id: string = '';
    /** Atributo 'type' del input */
    @Input() public type: string = 'text';
    /** Atributo 'name' del input */
    @Input() public name: string = '';
    /** Atributo 'placeholder' del input */
    @Input() public placeholder: string = '';
    /** Atributo 'autocomplete' del input */
    @Input() public autocomplete: string = 'off';
    /** Atributo 'disabled' del input */
    @Input() public disabled: boolean = false;
    /** Estilos añadidos directamente al input */
    @Input() public styles: any = {};
    /** Estilos añadidor al container del componente */
    @Input() public containerStyles: any = {};
    /** Clase añadida al input directamente (útil para distinguirlo a la hora de buscar en el DOM, p.e.) */
    @Input() public className: string = '';
    /** Clase añadida al container del componente */
    @Input() public containerClassName: string = '';

    /** Creamos los 'emisores de eventos' */
    @Output() public onChange = new EventEmitter<Event>();
    @Output() public onBlur = new EventEmitter<Event>();
    @Output() public onKeyUp = new EventEmitter<KeyboardEvent>();


    constructor() { }

    public ngOnInit(): void {}

    public ngOnChanges(changes: SimpleChanges): void {}

    /** Manejador de eventos 'blur' del input */
    public onInputBlur(event: Event): void {
        this.onBlur.emit(event);
    }

    /** Manejador de eventos 'keyup' y 'change' del input */
    public onInputKeyUp(event: KeyboardEvent): void {
        this.onChange.emit(event as Event);
        this.onKeyUp.emit(event);
    }
}
