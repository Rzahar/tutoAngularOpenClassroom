import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
      this.mySnap = new FaceSnap(
      'Archibald',
      'Une super description',
      'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
      new Date(),
      0 );
      this.myOtherSnap = new FaceSnap(
        'Piano',
        'Un super piano',
        'https://i0.wp.com/apprendre-a-jouer-du-piano.com/wp-content/uploads/2016/09/piano-queue.jpg',
        new Date(),
        0
      );
      this.myLastSnap = new FaceSnap(
        'Circuit training',
        'Un super sport',
        'https://medias.toutelanutrition.com/blog/2020/12/banner-circuit-training.jpg',
        new Date(),
        0
      )
  }
}

