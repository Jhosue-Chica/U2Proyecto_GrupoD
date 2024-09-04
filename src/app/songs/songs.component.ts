import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import {ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SongsComponent {

}
