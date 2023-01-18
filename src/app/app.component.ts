import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title:'Archibald',
        description:'Une super description',
        imageUrl:'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
        createdDate: new Date(),
        snaps: 150,
      location: 'Lille'},
      {
        title:'Piano',
        description:'Un super piano',
        imageUrl:'https://i0.wp.com/apprendre-a-jouer-du-piano.com/wp-content/uploads/2016/09/piano-queue.jpg',
        createdDate:new Date(),
        snaps:255,
        location:'pas à Lille'
      },
      {
        title:'Circuit training',
        description:'Un super sport',
        imageUrl: 'https://medias.toutelanutrition.com/blog/2020/12/banner-circuit-training.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title:'Archibald',
        description:'Une super description',
        imageUrl:'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
        createdDate: new Date(),
        snaps: 0,
      location: 'Lille'},
      {
        title:'Piano',
        description:'Un super piano',
        imageUrl:'https://i0.wp.com/apprendre-a-jouer-du-piano.com/wp-content/uploads/2016/09/piano-queue.jpg',
        createdDate:new Date(),
        snaps:0,
        location:'pas à Lille'
      },
      {
        title:'Circuit training',
        description:'Un super sport',
        imageUrl: 'https://medias.toutelanutrition.com/blog/2020/12/banner-circuit-training.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ]
  }
}

