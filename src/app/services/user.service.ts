import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private colectionName:string ='usuario';
  constructor(public afs: AngularFirestore) { 
  }
  add(user:User){
    return this.afs.collection<User>(this.colectionName).add(user);
  }
  update(user:User){
    let id = user.id;
    delete user.id;
    return this.afs.collection<User>(this.colectionName).doc(id).update(user)
  }
  getAll(){
    return this.afs.collection(this.colectionName).snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        let user: User = action.payload.doc.data() as User;
        user.id = action.payload.doc.id;
        return user;
      })
    }))
  }
  get(id){
    return this.afs.collection(this.colectionName).doc(id).snapshotChanges().pipe(map(action => {
      let user: User = action.payload.data() as User;
      user.id = action.payload.id;
      return user;
    }))
  }
  delete(id){
    return this.afs.collection(this.colectionName).doc(id).delete()
  }
}
