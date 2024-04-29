import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login-component-fail-dialog',
  templateUrl: './login-component-fail-dialog.component.html',
  styleUrl: './login-component-fail-dialog.component.scss'
})
export class LoginComponentFailDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponentFailDialogComponent>) {}
}
