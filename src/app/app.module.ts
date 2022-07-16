import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { PedidoItemComponent } from './components/pedido-item/pedido-item.component';
import { PedidoDetailComponent } from './components/pedido-detail/pedido-detail.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidosComponent,
    LoginComponent,
    SidebarComponent,
    PedidoItemComponent,
    PedidoDetailComponent,
    ProductoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
