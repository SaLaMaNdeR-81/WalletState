import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SidebarItem } from '../Component/Layout/Sidebar/Component/SidebarItem/SidebarItem.component';
import { SidebarMenu } from '../Component/Layout/Sidebar/Component/SidebarMenu/SidebarMenu.component';
import { SidebarLabel } from '../Component/Layout/Sidebar/Component/SidebarLabel/SidebarLabel.component';
import { DialogConfirmComponent } from '../Component/DialogConfirm/DialogConfirm.component';
import { StatusDialogFormComponent } from '../Component/StatusDialogForm/StatusDialogForm.component';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    StatusDialogFormComponent,

    SidebarItem,
    SidebarMenu,
    SidebarLabel,

  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DialogConfirmComponent,
    StatusDialogFormComponent,

    SidebarItem,
    SidebarMenu,
    SidebarLabel,
  ]
})
export class SubComponents { }
