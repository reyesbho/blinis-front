import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  _opened: boolean = true;
  constructor(private primengConfig: PrimeNGConfig,
    private sidebarService: SidebarService) {

    this.sidebarService._isOpened().subscribe(
      open => this._opened = open
    );
  }

  

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
