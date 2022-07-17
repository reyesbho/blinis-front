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
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidosComponent,
    LoginComponent,
    SidebarComponent,
    PedidoItemComponent,
    PedidoDetailComponent,
    ProductoItemComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
