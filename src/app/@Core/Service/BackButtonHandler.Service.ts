import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root',
})
export class BackButtonHandlerService {

  constructor(private router: Router) {
    this.initializeBackButtonListener();
  }

  initializeBackButtonListener() {
    // Listen for the back button event
    App.addListener('backButton', () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {

    

    if (this.router.url === '/home') {
      const confirmExit = window.confirm('Do you really want to exit the app?');
      if (confirmExit) {
        App.exitApp();
      }
    }else if (this.router.url === '/category') {
        this.router.navigate(['/home']);
          
    } else {
      this.router.navigate(['../']);
    }
  }
}
