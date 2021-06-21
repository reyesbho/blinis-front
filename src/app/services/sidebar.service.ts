import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  _opened: boolean = true;

  subject = new Subject<boolean>();


  constructor() { }


  
  _toggleSidebar() {
    this._opened = !this._opened;
    this.subject.next(this._opened);
  }

  _isOpened(): Observable<boolean> {
    return this.subject.asObservable();
  }

}
