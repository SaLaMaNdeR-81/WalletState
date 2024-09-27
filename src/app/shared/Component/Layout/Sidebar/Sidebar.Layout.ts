import { Component, OnInit ,Output ,Input ,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { StorageService,Storage } from '../../../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../../../@Core/Data/Payment.Data';
import { StatusTestData } from '../../../../@Core/Data/Status.Data';
import { DialogConfirmComponent } from '../../DialogConfirm/DialogConfirm.component';

@Component({
  selector: 'Layout-Sidebar',
  templateUrl: './Sidebar.Layout.html',
  styleUrls: ['./Sidebar.Layout.scss']
})
export class LayoutSidebar implements OnInit {

  @Output() ToggleSidebar = new EventEmitter<any>()

  constructor(private StorageService:StorageService,private Router:Router,private MatDialog:MatDialog) { }

  ngOnInit() {
  }

  ToggleSidebarEvent(){
    this.ToggleSidebar.emit("")
  }

  public SetStorage_Multi(){
    this.StorageService.Set(Storage.PAYMENTLIST,PaymentTestData)
    this.StorageService.Set(Storage.STATUSLIST,StatusTestData)
  }
  public SetStorage_Single(){
    this.StorageService.Set(Storage.PAYMENTLIST,[PaymentTestData[0]])
    this.StorageService.Set(Storage.STATUSLIST,StatusTestData)
  }
  // public ClearStorage(){
  //   this.StorageService.Clear(Storage.PAYMENTLIST)
  //   this.StorageService.Clear(Storage.STATUSLIST)
  // }
  public ClearStorage(): void{
      this.MatDialog
        .open(DialogConfirmComponent, {
          data: `توجه داشته باشید با این کار تمامی اطلاعات شما پاک میشود`,
          // data: `Data`,
          direction:"rtl"
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (confirmado) {
            this.StorageService.Clear(Storage.PAYMENTLIST)
            this.StorageService.Clear(Storage.STATUSLIST)
            alert("تمامی اطلاعات شما پاک شد.");
            // alert("Clear");
          } else {
            alert("عملیات لغو شد.");
            // alert("Canceled");
          }
        });
  }
  
  public RedirectToHome() {
    this.Router.navigate(['']); // Redirects to '/home' route
  }

  public RedirectStatus() {
    this.Router.navigate(['/status']); // Redirects to '/home' route
  }

}
