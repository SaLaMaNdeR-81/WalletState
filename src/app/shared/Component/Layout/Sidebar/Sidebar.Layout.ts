import { Component, OnInit ,Output ,Input ,EventEmitter } from '@angular/core';
import { StorageService,Storage } from '../../../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../../../@Core/Data/Payment.Data';
import { StatusTestData } from '../../../../@Core/Data/Status.Data';

@Component({
  selector: 'Layout-Sidebar',
  templateUrl: './Sidebar.Layout.html',
  styleUrls: ['./Sidebar.Layout.scss']
})
export class LayoutSidebar implements OnInit {

  

  constructor(private StorageService:StorageService) { }

  ngOnInit() {
  }

  public SetStorage_Multi(){
    this.StorageService.Set(Storage.PAYMENTLIST,PaymentTestData)
    this.StorageService.Set(Storage.STATUSLIST,StatusTestData)
  }
  public SetStorage_Single(){
    this.StorageService.Set(Storage.PAYMENTLIST,[PaymentTestData[0]])
    this.StorageService.Set(Storage.STATUSLIST,StatusTestData)
  }
  public ClearStorage(){
    this.StorageService.Clear(Storage.PAYMENTLIST)
    this.StorageService.Clear(Storage.STATUSLIST)
  }


}
