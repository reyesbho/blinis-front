import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  _opened: boolean = true;
  constructor(private sidebarService:SidebarService) {
    this.sidebarService._isOpened().subscribe(
      open => this._opened = open
    );
   }

  ngOnInit(): void {
    
  }



  _toggleSidebar(){
    this.sidebarService._toggleSidebar();
  }
}
