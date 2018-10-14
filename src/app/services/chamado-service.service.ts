import { Chamado } from './../models/chamado';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ChamadoServiceService {
  private cNAme:string="chamado";
  constructor(private db:AngularFirestore) { }
  getByAp(id){debugger
    return this.db.collection(this.cNAme, ref => ref.where('apartamento', '==', id)).snapshotChanges().pipe(
      map(change=>{
        return change.map(snap=>{
          let chamado:Chamado  = snap.payload.doc.data();
           chamado.id = snap.payload.doc.id;
           return chamado;
        })
      })
    )
  }
}
