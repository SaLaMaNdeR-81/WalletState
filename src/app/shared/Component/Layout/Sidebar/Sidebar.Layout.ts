import { Component, OnInit ,Output ,Input ,EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { StorageService,Storage } from '../../../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../../../@Core/Data/Payment.Data';
=======
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

@Component({
  selector: 'Layout-Sidebar',
  templateUrl: './Sidebar.Layout.html',
  styleUrls: ['./Sidebar.Layout.scss']
})
export class LayoutSidebar implements OnInit {

  

<<<<<<< HEAD
  constructor(private StorageService:StorageService) { }
=======
  constructor() { }
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

  ngOnInit() {
  }

<<<<<<< HEAD
  public SetStorage_Multi(){
    this.StorageService.Set(Storage.PAYMENTLIST,PaymentTestData)
  }
  public SetStorage_Single(){
    this.StorageService.Set(Storage.PAYMENTLIST,[PaymentTestData[0]])
  }
  public ClearStorage(){
    this.StorageService.Clear(Storage.PAYMENTLIST)
  }

=======
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d
  

}
