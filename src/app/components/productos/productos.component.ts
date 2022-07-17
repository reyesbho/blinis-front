import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto.model';
import { ProductoService } from 'src/app/services/Productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : Array<Producto> = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
      this.productoService.getProducts().subscribe(res => {
        this.productos = res.map(item => {return {...item.payload.doc.data() as Producto}});
      });
  }

}
