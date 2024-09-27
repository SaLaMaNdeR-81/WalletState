import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-DialogConfirm',
  templateUrl: './DialogConfirm.component.html',
  styleUrls: ['./DialogConfirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit() {
  }

}
