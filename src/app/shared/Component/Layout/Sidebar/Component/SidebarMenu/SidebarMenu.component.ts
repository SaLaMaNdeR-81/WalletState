import { Component, OnInit,Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'Sidebar-Menu',
  templateUrl: './SidebarMenu.component.html',
  styleUrls: ['./SidebarMenu.component.scss'],
  animations: [
    trigger('SlideInOut', [
      state('void', style({
        height: "0px"
      })),
      transition(':enter, :leave', [
        animate(400)
      ]),
    ])
  ]
})
export class SidebarMenu {
  ContentMenu:boolean=false

  @Input() Title:string=""
  @Input() Icon:string=""
  @Input() Color?:string=""

  constructor() { }

  public TogleMenu() {
    this.ContentMenu = !this.ContentMenu
  }

}
