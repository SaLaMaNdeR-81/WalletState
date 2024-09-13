import { Component, OnInit } from '@angular/core';
import { StorageService,Storage } from '../../@Core/Service/Storage.Service';
import { TimeService } from '../../@Core/Service/Time.Service';

import { Status } from '../../@Core/InterFace/Payment.Interface';

@Component({
  selector: 'Page-Status',
  templateUrl: './Status.Page.html',
  styleUrls: ['./Status.Page.scss']
})
export class PageStatus {

  StatusFormIsUpdate:boolean=false
  public StatusListData:any = []
  public PaymentData:any = []
  public Menu:any={
    StatusForm: false,
  }

  public StatusForm:any={
    UID:"",
    Name:"",
    Color:""
  }

  constructor(private StorageService:StorageService,private TimeService:TimeService) {
    this.GetStatusListData()
    this.GetPaymentData()
    console.log(this.StatusCardDescriptions('StatusUID-1').Total);
    console.log(this.StatusCardDescriptions('StatusUID-1').Last30);
  }

  public StatusCardDescriptions(UID:string){
    const last30DaysDate = this.TimeService.getLast30();
    let Data = this.StorageService.Get(Storage.PAYMENTLIST)
    Data = Data.filter((Item: any) => Item.StatusId === UID);
    const Last30Data = Data.filter((Item: any) => {
      const itemCreationDate = new Date(Item.Creation);
      return itemCreationDate >= last30DaysDate;
    });

    const TotalPrice = Data.reduce((Sum:number,Item:any)=> Sum + Item.Price,0)
    const Last30Price = Last30Data.reduce((Sum:number,Item:any)=> Sum + Item.Price,0)

    return{
      Total : Data.length,
      TotalPrice : TotalPrice.toLocaleString(),
      Last30 : Last30Data.length,
      Last30Price : Last30Price.toLocaleString(),
    }
    
  }

  private GetPaymentData(){
    setInterval(()=>{
      this.PaymentData = this.StorageService.Get(Storage.PAYMENTLIST)
    },Storage.RefreshTime)
  }

  private GetStatusListData(){
    setInterval(()=>{
      this.StatusListData = this.StorageService.Get(Storage.STATUSLIST)
    },Storage.RefreshTime)
  }

  public GetStatusSingleData(UID:any){
    return this.StorageService.SingleGet(Storage.STATUSLIST,UID)
  }
  public SetStatusColor(Color:string):void{
    this.StatusForm.Color = Color
  }

  private GenerateUID() {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 100000);
    return timestamp + randomNum;
  }

  private RestorForm(){
    this.StatusForm.UID = ""
    this.StatusForm.Name = ""
    this.StatusForm.Color = ""
  }

  // =============              =============
  //              ==============
  //              Action Handler
  //              ==============
  // =============              =============

  public OpenStatusForm(){
    this.Menu.StatusForm = true
  }
  public OpenStatusFormUpdate(Data:any){
    this.Menu.StatusForm = true
    this.StatusFormIsUpdate = true
    this.RestorForm()
    this.StatusForm = Data

  }
  public CloseStatusForm(){
    this.Menu.StatusForm = false
    this.StatusFormIsUpdate = false
    this.RestorForm()

  }
  public DeleteStatus(){
    this.StorageService.Delete(Storage.STATUSLIST,this.StatusForm.UID)
    this.CloseStatusForm()
  }
  public SaveStatusForm(){
    if(!this.StatusForm.Name) return this.CloseStatusForm() ;
    if(!this.StatusFormIsUpdate){
      this.StatusForm.UID = this.GenerateUID()
      this.StorageService.Add(Storage.STATUSLIST,this.StatusForm)
      this.RestorForm()
      this.CloseStatusForm()
    }
    if(this.StatusFormIsUpdate){
      this.StorageService.Edit(Storage.STATUSLIST,this.StatusForm.UID,this.StatusForm),
      this.RestorForm()
      this.CloseStatusForm()
    }
  }

}
