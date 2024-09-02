import { Component, OnInit ,Output ,Input ,EventEmitter } from '@angular/core';
import { StorageService,Storage } from '../../../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../../../@Core/Data/Payment.Data';

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
  }
  public SetStorage_Single(){
    this.StorageService.Set(Storage.PAYMENTLIST,[PaymentTestData[0]])
  }
  public ClearStorage(){
    this.StorageService.Clear(Storage.PAYMENTLIST)
  }


}
