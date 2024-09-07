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
  public Menu:any={
    StatusForm: true,
  }

  public StatusForm:any={
    UID:"",
    Name:"",
    Color:""
  }

  constructor(private StorageService:StorageService) {
    this.GetStatusListData()
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
