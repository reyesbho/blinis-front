import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: PedidosComponent },
  { path: "login", component: LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
