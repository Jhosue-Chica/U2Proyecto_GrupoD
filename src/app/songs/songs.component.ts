import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import {ChangeDetectionStrategy} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule,MaterialModule,],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SongsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
