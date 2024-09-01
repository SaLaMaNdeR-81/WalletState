import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private readonly WEBSITENAME : string = "WalletState"

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
