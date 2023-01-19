import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title:'Archibald',
          description:'Une super description',
          imageUrl:'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
          createdDate: new Date(),
          snaps: 150,
        location: 'Lille'},
        {
          id:2,
          title:'Piano',
          description:'Un super piano',
          imageUrl:'https://i0.wp.com/apprendre-a-jouer-du-piano.com/wp-content/uploads/2016/09/piano-queue.jpg',
          createdDate:new Date(),
          snaps:255,
          location:'pas à Lille'
        },
        {
          id:3,
          title:'Circuit training',
          description:'Un super sport',
          imageUrl: 'https://medias.toutelanutrition.com/blog/2020/12/banner-circuit-training.jpg',
          createdDate: new Date(),
          snaps: 0
        },
        {
          id:4,
          title:'Archibald',
          description:'Une super description',
          imageUrl:'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
          createdDate: new Date(),
          snaps: 0,
        location: 'Lille'},
        {
          id:5,
          title:'Piano',
          description:'Un super piano',
          imageUrl:'https://i0.wp.com/apprendre-a-jouer-du-piano.com/wp-content/uploads/2016/09/piano-queue.jpg',
          createdDate:new Date(),
          snaps:0,
          location:'pas à Lille'
        },
        {
          id:6,
          title:'Circuit training',
          description:'Un super sport',
          imageUrl: 'https://medias.toutelanutrition.com/blog/2020/12/banner-circuit-training.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ]

      getAllFaceSnaps():FaceSnap[] {
        return this.faceSnaps;
      }

      snapFaceSnapById(id:number):void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
        if (faceSnap) {
          faceSnap.snaps = faceSnap.snaps + 1;
        } else {
          throw new Error('FaceSnap with id'+ id +'not found');
        }
      }
    

      getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
        if (faceSnap) {
          return faceSnap;
        } else {
          throw new Error('FaceSnap with id'+ id +'not found');
  
      }
      
      }

      snapSwitchFaceSnapById(faceSnapId : number, snapType: 'snap' |'unsnap'): void{
        const faceSnape = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnape.snaps++ : faceSnape.snaps--;
      }
    }