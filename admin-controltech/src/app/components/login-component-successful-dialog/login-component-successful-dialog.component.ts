import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login-component-successful-dialog',
  templateUrl: './login-component-successful-dialog.component.html',
  styleUrl: './login-component-successful-dialog.component.scss'
})
export class LoginComponentSuccessfulDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponentSuccessfulDialogComponent>) {}
}
