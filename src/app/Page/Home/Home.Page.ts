import { Component, OnInit } from '@angular/core';
import { StorageService ,Storage } from '../../@Core/Service/Storage.Service';
import { PaymentTestData } from '../../@Core/Data/Payment.Data';
import { TimeService } from '../../@Core/Service/Time.Service';
import { Payment } from '../../@Core/InterFace/Payment.Interface';


@Component({
  selector: 'Page-Home',
  templateUrl: './Home.Page.html',
  styleUrls: ['./Home.Page.scss']
})
export class PageHome {

  PaymentFormIsUpdate:boolean=false
  PaymentData:any = []
  SelectedStatusID:string= ""
  FinalPaymentData:any = []
  StatusListData:any = []
  public Menu:any={
    PaymentForm: false,
  }
  PaymentForm:any={
    UID:"",
    Title:"",
    Description:"",
    StatusId:"",
    Creation:"",
    Price:0,
    Profit:false
  }
  

  constructor(private StorageService:StorageService, public TimeService:TimeService ) {
    this.GetPaymentData()
    this.GetFinalPaymentData()
    this.GetStatusListData()
  }

  private GenerateUID() {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 100000);
    return timestamp + randomNum;
  }
  private RestorForm(){
    this.PaymentForm.UID = ""
    this.PaymentForm.Title = ""
    this.PaymentForm.Description = ""
    this.PaymentForm.StatusId = ""
    this.PaymentForm.Creation = ""
    this.PaymentForm.Price = 0
    this.PaymentForm.Profit = false
  }

  private GetPaymentData(){
    setInterval(()=>{
      this.PaymentData = this.StorageService.Get(Storage.PAYMENTLIST)
    },Storage.RefreshTime)
  }
  private GetFinalPaymentData(){
    setInterval(()=>{
      if (this.SelectedStatusID) {
        this.FinalPaymentData =  this.PaymentData.filter((Item: any) => Item.StatusId === this.SelectedStatusID);
      }else{
        this.FinalPaymentData =  this.PaymentData
      }
    },Storage.RefreshTime)
  }
  private GetStatusListData(){
    setInterval(()=>{
      this.StatusListData = this.StorageService.Get(Storage.STATUSLIST)
    },Storage.RefreshTime)
  }

  public GetStatusData(UID:any){
    return this.StorageService.SingleGet(Storage.STATUSLIST,UID)
  }
  

// =============              =============
//              ==============
//              Action Handler
//              ==============
// =============              =============

  public OpenPaymentForm(){
    this.Menu.PaymentForm = true
  }
  public ClosePaymentForm(){
    this.Menu.PaymentForm = false
    this.PaymentFormIsUpdate = false
    this.RestorForm()
  }
  public OpenPaymentFormUpdate(Data:any){
    this.Menu.PaymentForm = true
    this.PaymentFormIsUpdate = true
    this.RestorForm()
    this.PaymentForm = Data
  }
  public DeletePayment(){
    this.StorageService.Delete(Storage.PAYMENTLIST,this.PaymentForm.UID)
    this.ClosePaymentForm()
  }
  public SavePaymentForm(){
    if(!this.PaymentForm.Title) return this.ClosePaymentForm() ;
    if(!this.PaymentFormIsUpdate){
      this.PaymentForm.Creation = new Date().getTime()
      this.PaymentForm.UID = this.GenerateUID()
      this.StorageService.Add(Storage.PAYMENTLIST,this.PaymentForm)
      this.Menu.NewPayment= false
      this.RestorForm()
      this.ClosePaymentForm()
    }
    if(this.PaymentFormIsUpdate){
      this.StorageService.Edit(Storage.PAYMENTLIST,this.PaymentForm.UID,this.PaymentForm),
      this.RestorForm()
      this.ClosePaymentForm()
    }
    
  }
  
  
}
