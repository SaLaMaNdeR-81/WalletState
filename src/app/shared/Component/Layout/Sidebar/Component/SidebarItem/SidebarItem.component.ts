import { Component,OnInit ,Input } from '@angular/core';

@Component({
  selector: 'Sidebar-Item',
  templateUrl: './SidebarItem.component.html',
  styleUrls: ['./SidebarItem.component.scss']
})
export class SidebarItem {

  @Input() Title:string=""
  @Input() Icon:string=""
  @Input() Color?:string=""

  constructor() { }

  ngOnInit() {
  }

}
