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

  public CheckStorage(Storage:string):void{
    if(!localStorage.getItem(Storage)){
      const Data = JSON.stringify([])
      localStorage.setItem(Storage,Data)
    }
  }

  public Clear(Storage:string):void{
    localStorage.removeItem(Storage)
  }

  public Get(Storage:string){
    this.CheckStorage(Storage)
    const GetData:any = localStorage.getItem(Storage)
    const FixData = JSON.parse(GetData)
    return FixData;
  }

  public SingleGet(Storage: string, UID: string): any {
    const GetData: any = this.Get(Storage);
    const SingleItem = GetData.find((Item: any) => Item.UID === UID);
    return SingleItem;
  }

  public Set(Storage:string,Data:any):void{
    this.Clear(Storage)
    const FixData = JSON.stringify(Data)
    localStorage.setItem(Storage,FixData) 
  }

  public Edit(Storage: string, UID: String, ItemData: any):void {
    const GetData: any = this.Get(Storage);
    const UpdateData = GetData.map((Item: any) => 
        Item.UID === UID ? { ...Item, ...ItemData } : Item
    );
    this.Set(Storage,UpdateData)
  }

  public Add(Storage:string,Item:any):void{
    this.CheckStorage(Storage)
    const Data= this.Get(Storage)
    Data.push(Item)

    this.Set(Storage,Data)
    
  }
  public Delete(Storage: string, UID: string):void {
    const GetData: any = this.Get(Storage);
    const UpdatedData = GetData.filter((Item: any) => Item.UID !== UID);
    this.Set(Storage,UpdatedData)
  }

  

}
