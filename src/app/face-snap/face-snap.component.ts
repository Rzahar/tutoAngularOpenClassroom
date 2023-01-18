import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description! : string;
  createdDate!: Date;
  snaps!: number;
  imageUrl! : string;
  buttonText!: string;

  ngOnInit(){
    this.title = 'Archibald';
    this.description = 'Une super description';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
    this.buttonText = 'Oh snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh snap!'){
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh snap!'
    }
  }
}
