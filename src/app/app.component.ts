import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap

  ngOnInit() {
      this.mySnap = new FaceSnap(
      'Archibald',
      'Une super description',
      'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
      new Date(),
      0 )
  }
}

