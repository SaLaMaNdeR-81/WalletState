import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss']
})
export class PageHome {

  PaymentData:any = ["","","","","","","","","","","","",""]
  public Menu:any={
    NewPayment: false
  }
  public PData:any={
    UId:"",
    Title:"Title",
    Description:"Lorem",
    StatusUId:"",
    Creation:"",
    Price:"0",
    Profit:false
  }

  constructor() { }

}
