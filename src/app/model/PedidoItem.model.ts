import { Producto } from "./Producto.model";

export class PedidoItem {
    idPedido!: number;
    cliente!: string;
    fechaEntrega!: Date;
    total!: number;
    adeudo!: number;
    estatus!: string;
    productos!: Producto[];
}
