import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'primary-input',
    templateUrl: './primary-input.component.html',
    styleUrls: ['./primary-input.component.scss']
})
export class PrimaryInputComponent implements OnInit, OnChanges {
    /** Label del input (opcional) */
    @Input() label: string = '';
    /** Valor del input */
    @Input() value: string = '';
    /** Mensaje de error a mostrar (cadena vacía si no hay error que mostrar) */
    @Input() error: string = '';
    /** Id del input */
    @Input() id: string = '';
    /** Atributo 'type' del input */
    @Input() type: string = 'text';
    /** Atributo 'name' del input */
    @Input() name: string = '';
    /** Atributo 'placeholder' del input */
    @Input() placeholder: string = '';
    /** Atributo 'autocomplete' del input */
    @Input() autocomplete: string = 'off';
    /** Atributo 'disabled' del input */
    @Input() disabled: boolean = false;
    /** Estilos añadidos directamente al input */
    @Input() styles: any = {};
    /** Estilos añadidor al container del componente */
    @Input() containerStyles: any = {};
    /** Clase añadida al input directamente (útil para distinguirlo a la hora de buscar en el DOM, p.e.) */
    @Input() className: string = '';
    /** Clase añadida al container del componente */
    @Input() containerClassName: string = '';

    /** Creamos los 'emisores de eventos' */
    @Output() onChange = new EventEmitter<Event>();
    @Output() public onBlur = new EventEmitter<Event>();
    @Output() onKeyUp = new EventEmitter<KeyboardEvent>();


    constructor() { }

    public ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {}

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
