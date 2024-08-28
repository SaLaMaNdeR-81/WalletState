import { Component, OnInit, Output ,Input ,EventEmitter } from '@angular/core';

@Component({
  selector: 'Layout-Header',
  templateUrl: './Header.Layout.html',
  styleUrls: ['./Header.Layout.scss']
})
export class LayoutHeader {

  @Output() ToggleSidebar = new EventEmitter<any>()

  constructor() { }

  ToggleSidebarEvent(){
    this.ToggleSidebar.emit("")
  }

}
