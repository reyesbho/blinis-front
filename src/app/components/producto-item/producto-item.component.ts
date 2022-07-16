import { Component, OnInit } from '@angular/core';
import { PedidoItem } from 'src/app/model/PedidoItem.model';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  producto: Producto = { tipo: 'Pizza', descripcion: 'Peperoni peperoni', especialidad: 'Peperoni', size: 'Grande', precio: 200,
  ingredientes: ['Peperoni', 'Cebolla'], icon: './../assets/pizza.png'};

  constructor() { }

  ngOnInit(): void {
  }

}
