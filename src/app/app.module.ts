import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { PedidoItemComponent } from './components/pedido-item/pedido-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidosComponent,
    LoginComponent,
    SidebarComponent,
    PedidoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
