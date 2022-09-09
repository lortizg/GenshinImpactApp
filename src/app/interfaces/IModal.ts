export interface IModal {
    title: string;
    content: Array<string>;
    onAccept?: () => void;
    onCancel?: () => void;
}
