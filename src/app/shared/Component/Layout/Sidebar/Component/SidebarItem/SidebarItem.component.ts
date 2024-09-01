import { Component,OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Sidebar-Item',
  templateUrl: './SidebarItem.component.html',
  styleUrls: ['./SidebarItem.component.scss']
})
export class SidebarItem {

  @Input() Title:string=""
  @Input() Icon:string=""
  @Input() Color?:string=""
  @Output() Action:EventEmitter<any>= new EventEmitter<any>()


  constructor() { }

  ngOnInit() {
  }

  public ActionHandler(){
    this.Action.emit("")
  }

}
