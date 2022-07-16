import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  opened: any;
  constructor(private sidebarService: SidebarService) {

  }

  ngOnInit(): void {
    this.listenerTogleSidebar();
  }

  listenerTogleSidebar() {
    this.sidebarService.getTogleSidebar().subscribe(
      (open: boolean) => this.opened = open
    );
  }

  _toggleSidebar() {
    this.sidebarService._toggleSidebar();
  }
}
