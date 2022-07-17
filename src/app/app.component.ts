import { APP_ID, Component, InjectionToken, OnInit } from '@angular/core';

import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  _opened: boolean = false;


  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getTogleSidebar().subscribe(
      (open: boolean) => this._opened = open
    );


  }

  ngOnInit() {
  }
}
