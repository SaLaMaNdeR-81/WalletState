import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItem } from '../Component/Layout/Sidebar/Component/SidebarItem/SidebarItem.component';
import { SidebarMenu } from '../Component/Layout/Sidebar/Component/SidebarMenu/SidebarMenu.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    SidebarItem,
    SidebarMenu,
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
