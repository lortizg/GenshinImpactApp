/**
 * Interfaz con las opciones a la hora de realizar peticiones desde los servicios.
 */
export interface IRequestHeaderOptions {
    "Content-Type"?: string;
    "Accept"?: string;
    "Authorization"?: string;
}

export interface IRequestHeader {
    headers: IRequestHeaderOptions;
}
