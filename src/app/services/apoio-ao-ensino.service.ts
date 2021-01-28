import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ApoioAoEnsinoService {

  apoioAoEnsinoCollection:AngularFirestoreCollection<ApoioAoEnsino>;
  apoioAoEnsino: Observable<ApoioAoEnsino[]>;
  apoioAoEnsinoDoc: AngularFirestoreDocument<ApoioAoEnsino>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.apoioAoEnsinoCollection = this.afs.collection('apoioAoEnsino', ref => ref.orderBy('nome','asc'));
  this.apoioAoEnsino=this.apoioAoEnsinoCollection.snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as ApoioAoEnsino;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getApoioAoEnsino(){
    return this.apoioAoEnsino;
  }

  addApoioAoEnsino(apoioAoEnsino:ApoioAoEnsino){
   this.apoioAoEnsinoCollection.add(apoioAoEnsino);
  }
  deleteApoioAoEnsino(apoioAoEnsino:ApoioAoEnsino){
     this.apoioAoEnsinoDoc=this.afs.doc(`apoioAoEnsino/${apoioAoEnsino.id}`);
     this.apoioAoEnsinoDoc.delete();
  }
  updateApoioAoEnsino(apoioAoEnsino:ApoioAoEnsino){
    this.apoioAoEnsinoDoc=this.afs.doc(`apoioAoEnsino/${apoioAoEnsino.id}`);
    this.apoioAoEnsinoDoc.update(apoioAoEnsino);
  }


}
