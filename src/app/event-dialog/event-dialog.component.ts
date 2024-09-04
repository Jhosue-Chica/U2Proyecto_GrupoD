import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
  imports: [MatDialogModule, CommonModule]
})
export class EventDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EventDialogComponent>
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
