import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService,Storage } from '../../../@Core/Service/Storage.Service';

@Component({
  selector: 'Dialog-StatusDialogForm',
  templateUrl: './StatusDialogForm.component.html',
  styleUrls: ['./StatusDialogForm.component.scss']
})
export class StatusDialogFormComponent {

  constructor(
    public dialogRef: MatDialogRef<StatusDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { UID: string } ,
    private StorageService:StorageService
  ) { }

  private GetPeymentData(){
    const Data = this.StorageService.Get(Storage.PAYMENTLIST)
    const FinalData = Data.filter((Item: any) => Item.StatusId === this.data.UID);
    return FinalData;
  }


  public onRemoveStatus():void{
    this.StorageService.Delete(Storage.STATUSLIST,this.data.UID)
    this.dialogRef.close();
  }

  public onRemoveSubscriptions(): void {
    const Data = this.GetPeymentData()
    this.StorageService.Delete(Storage.STATUSLIST,this.data.UID)
    Data.map((Item:any)=>{
      this.StorageService.Delete(Storage.PAYMENTLIST,Item.UID)
      console.log(Item.UID);
    })
    this.dialogRef.close();
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
