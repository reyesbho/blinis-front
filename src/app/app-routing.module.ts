import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PedidoDetailComponent } from './components/pedido-detail/pedido-detail.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: PedidosComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "login", component: LoginComponent  },
  { path: "pedido/:idPedido", component: PedidoDetailComponent  },
  { path: "productos", component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
