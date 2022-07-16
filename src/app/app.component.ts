import { APP_ID, Component, InjectionToken, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { SidebarService } from './services/sidebar.service';
import { initializeApp } from "firebase/app";
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, MESSAGIN_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from './config/constants';
import { getFirestore } from 'firebase/firestore/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  _opened: boolean = false;


  constructor(private primengConfig: PrimeNGConfig,
    private sidebarService: SidebarService) {
    this.sidebarService.getTogleSidebar().subscribe(
      (open: boolean) => this._opened = open
    );


  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
