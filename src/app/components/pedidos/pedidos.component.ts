import { Component, OnInit } from '@angular/core';
import { PedidoItem } from 'src/app/model/PedidoItem.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


  pedidos: PedidoItem[] = [
  ];
  constructor() {
    this.pedidos = [
      { cliente: "Reyes Bustamante", fechaEntrega: new Date(), productos: 5, total: 500, adeudo: 200, estatus: "Por hacer" },
      { cliente: "Jorge Perez", fechaEntrega: new Date(), productos: 5, total: 500, adeudo: 200, estatus: "Por hacer" },
      { cliente: "Gato Hernandez", fechaEntrega: new Date(), productos: 5, total: 500, adeudo: 200, estatus: "Por hacer" },
      { cliente: "Mauel Garcia", fechaEntrega: new Date(), productos: 5, total: 500, adeudo: 200, estatus: "Por hacer" },
      { cliente: "Horacio Maldonado", fechaEntrega: new Date(), productos: 5, total: 500, adeudo: 200, estatus: "Por hacer" },
    ];
  }

  ngOnInit(): void {
  }

}
