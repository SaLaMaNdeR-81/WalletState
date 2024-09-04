import { Component,OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Sidebar-Label',
  templateUrl: './SidebarLabel.component.html',
  styleUrls: ['./SidebarLabel.component.scss']
})
export class SidebarLabel {

  @Input() Title:string=""
  @Input() Icon:string=""
  @Input() Color?:string=""

  constructor() { }

  ngOnInit() {
  }

}
