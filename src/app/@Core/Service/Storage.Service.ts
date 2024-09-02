import { Injectable } from '@angular/core';

export enum Storage{
  RefreshTime = 500,
  PAYMENTLIST = "PaymentList",
  STATUSLIST = "StatustList"
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly RefreshTime :number = 300
  private readonly PAYMENTLIST :string = "PaymentList"
  private readonly PAYMENTSTATUS :string = "WalletStat"

  constructor(){

  }

  public CheckStorage(Storage:string){
    if(!localStorage.getItem(Storage)){
      const Data = JSON.stringify([])
      localStorage.setItem(Storage,Data)
    }
  }

  public Clear(Storage:string){
    localStorage.removeItem(Storage)
  }

  public Get(Storage:string){
    this.CheckStorage(Storage)
    const GetData:any = localStorage.getItem(Storage)
    const FixData = JSON.parse(GetData)
    return FixData;
  }

  public SingleGet(Storage:string,UId:string){
    const Data:any = this.Get(Storage)
    const FindItem = Data.find((Item:any) => Item.UID == UId)
    return FindItem ;
  }

  public Set(Storage:string,Data:any){
    this.Clear(Storage)
    const FixData = JSON.stringify(Data)
    localStorage.setItem(Storage,FixData) 
  }

  public Edit(Storage:Storage,Data:any){
    
  }
  public Add(Storage:Storage,UId:string,Data:any){

  }
  public Remove(){

  }

  

}