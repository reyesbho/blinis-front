import { Component, Input, OnInit } from '@angular/core';
import { PedidoItem } from 'src/app/model/PedidoItem.model';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
  styleUrls: ['./pedido-item.component.css']
})
export class PedidoItemComponent implements OnInit {

  @Input() pedido: PedidoItem = new PedidoItem();
  @Input() number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
