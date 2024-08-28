import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly WEBSITENAME : string = "ChatRoom"

  public ResetTitle(){
    document.title = this.WEBSITENAME
  }

  public SetTitle(Title:string){
    document.title = `${this.WEBSITENAME} - ${Title}`
  }

  public SetSpecialTitle(Title:string){
    document.title = Title
  }

}
