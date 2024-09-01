import { Component, OnInit } from '@angular/core';
import { StorageService ,Storage } from '../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../@Core/Data/Payment.Data';
import { TimeService } from '../../@Core/Service/Time.Service';


@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss']
})
export class PageHome {

  PaymentData:any = []
  public Menu:any={
    NewPayment: true
  }
  PaymentForm:any={
    UId:"",
    Title:"Title",
    Description:"Lorem",
    StatusUId:"",
    Creation:"",
    Price:"0",
    Profit:false
  }
  

  constructor(private StorageService:StorageService, public TimeService:TimeService ) {
    this.GetPaymentData()
  }

  GetPaymentData(){
    setInterval(()=>{
      this.PaymentData = this.StorageService.Get(Storage.PAYMENTLIST)
    },Storage.RefreshTime)
  }

}
