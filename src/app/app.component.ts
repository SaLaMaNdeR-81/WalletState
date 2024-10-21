import { Component } from '@angular/core';

import { TitleService } from './@Core/Service/Title.Service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TimeService } from './@Core/Service/Time.Service';
import { BackButtonHandlerService } from './@Core/Service/BackButtonHandler.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('SlideInOut', [
      state('void', style({
        transform: "translateX(-300px)"
      })),
      transition(':enter, :leave', [
        animate(400)
      ]),
    ])
  ]
})
export class AppComponent {
  SidebarState :boolean = false

  constructor(private TitleService:TitleService,private BackButtonHandlerService: BackButtonHandlerService){
    TitleService.ResetTitle()
  }

  ToggleSidebar(){
    this.SidebarState = !this.SidebarState
  }

}