import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/model/Producto.model';

@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.component.html',
  styleUrls: ['./pedido-detail.component.css']
})
export class PedidoDetailComponent implements OnInit {

  productos: Producto[] = [
    {
      clasificacion: 'pizza', nombre: 'Peperoni peperoni', tipo: 'Peperoni', size: 'Grande', precio: 200,
      ingredientes: ['Peperoni', 'Cebolla'], icon: './../assets/pizza.png'
    },
    {
      clasificacion: 'pizza', nombre: 'Peperoni peperoni', tipo: 'Peperoni', size: 'Grande', precio: 200,
      ingredientes: ['Peperoni', 'Cebolla'], icon: './../assets/pizza.png'
    }
  ];

  isUpdate: boolean = false;
  isActiveClasificacion: boolean = false;
  isActiveProducto: boolean = false;
  product: Number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.product = Number(routeParams.get('idPedido'));
    if(this.product && this.product != 0){
      this.isUpdate = true;
    }
  }

  activeClasificacion() {
    this.isActiveClasificacion = true;
  }

  activeProducto(){
    this.isActiveProducto = true;
  }
}
