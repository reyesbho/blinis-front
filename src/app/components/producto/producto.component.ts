import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input("producto") producto: Producto = new Producto();
  constructor() { }

  ngOnInit(): void {
  }

}
