import { Component , Inject} from '@angular/core';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-recover-password-dialog',
  templateUrl: './recover-password-dialog.component.html',
  styleUrls: ['./recover-password-dialog.component.scss']
})
export class RecoverPasswordDialogComponent {
  

  
  constructor(
    public dialogRef: MatDialogRef<RecoverPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  get message(): string {
    return this.data.message;
  }

  get showCheckbox(): boolean {
    return this.data.showCheckbox;
  }
}
