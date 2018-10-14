import { Apartamento } from './../models/apartamento';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {
  colectioName: string = 'apartamento'
  constructor(private afs: AngularFirestore) { }
  getMany(status: any) {
    return this.afs.collection(this.colectioName).snapshotChanges()
      .pipe(
        map(change => {
          return change.map(snap => {
            let ap: Apartamento = snap.payload.doc.data();
            ap.id = snap.payload.doc.id;
            return ap;
          })
        })
      )
  }
  get(id) {
    return this.afs.collection(this.colectioName).doc(id).snapshotChanges().pipe(
      map(snap => {
        let ap: Apartamento = snap.payload.data();
        ap.id = snap.payload.id;
        return ap;
      })
    )
  }
}
