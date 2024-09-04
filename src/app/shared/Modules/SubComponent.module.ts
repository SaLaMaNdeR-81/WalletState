import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SidebarItem } from '../Component/Layout/Sidebar/Component/SidebarItem/SidebarItem.component';
import { SidebarMenu } from '../Component/Layout/Sidebar/Component/SidebarMenu/SidebarMenu.component';
import { SidebarLabel } from '../Component/Layout/Sidebar/Component/SidebarLabel/SidebarLabel.component';

@NgModule({
  declarations: [
    SidebarItem,
    SidebarMenu,
    SidebarLabel,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SidebarItem,
    SidebarMenu,
  ]
})
export class SubComponents { }
