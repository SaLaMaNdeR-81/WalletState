<<<<<<< HEAD
import { Component,OnInit ,Input,Output,EventEmitter } from '@angular/core';
=======
import { Component,OnInit ,Input } from '@angular/core';
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

@Component({
  selector: 'Sidebar-Item',
  templateUrl: './SidebarItem.component.html',
  styleUrls: ['./SidebarItem.component.scss']
})
export class SidebarItem {

  @Input() Title:string=""
  @Input() Icon:string=""
  @Input() Color?:string=""
<<<<<<< HEAD
  @Output() Action:EventEmitter<any>= new EventEmitter<any>()

=======
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  public ActionHandler(){
    this.Action.emit("")
  }

=======
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d
}
