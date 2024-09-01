import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { StorageService ,Storage } from '../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../@Core/Data/Payment.Data';
import { TimeService } from '../../@Core/Service/Time.Service';

=======
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss']
})
export class PageHome {

<<<<<<< HEAD
  PaymentData:any = []
  public Menu:any={
    NewPayment: true
  }
  PaymentForm:any={
=======
  PaymentData:any = ["","","","","","","","","","","","",""]
  public Menu:any={
    NewPayment: false
  }
  public PData:any={
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d
    UId:"",
    Title:"Title",
    Description:"Lorem",
    StatusUId:"",
    Creation:"",
    Price:"0",
    Profit:false
  }
<<<<<<< HEAD
  

  constructor(private StorageService:StorageService, public TimeService:TimeService ) {
    this.GetPaymentData()
  }

  GetPaymentData(){
    setInterval(()=>{
      this.PaymentData = this.StorageService.Get(Storage.PAYMENTLIST)
    },Storage.RefreshTime)
  }
=======

  constructor() { }
>>>>>>> ad49858f569c00bc7ddb90eacaacb4730d86b74d

}
