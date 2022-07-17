import { Component, OnInit } from '@angular/core';
import { PedidoItem } from 'src/app/model/PedidoItem.model';
import { ProductoService } from 'src/app/services/Productos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


  pedidos: PedidoItem[] = [
  ];
  constructor(private productosService: ProductoService) {
    this.pedidos = [
      {idPedido:1, cliente: "Reyes Bustamante", fechaEntrega: new Date(), productos: [], total: 500, adeudo: 200, estatus: "Por hacer" },
      {idPedido:2, cliente: "Jorge Perez", fechaEntrega: new Date(), productos: [], total: 500, adeudo: 200, estatus: "Por hacer" },
      {idPedido:3, cliente: "Gato Hernandez", fechaEntrega: new Date(), productos: [], total: 500, adeudo: 200, estatus: "Por hacer" },
      {idPedido:4, cliente: "Mauel Garcia", fechaEntrega: new Date(), productos: [], total: 500, adeudo: 200, estatus: "Por hacer" },
      {idPedido:5, cliente: "Horacio Maldonado", fechaEntrega: new Date(), productos: [], total: 500, adeudo: 200, estatus: "Por hacer" },
    ];
  }

  ngOnInit(): void {
    console.log( this.productosService.getProducts().subscribe((res) => {
      res.map(e => console.log(e.payload.doc.data()));
    }
    ));
  }

}
