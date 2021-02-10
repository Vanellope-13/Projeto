import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Grupo } from '../modelos/grupo';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {

 
  grupoCollection:AngularFirestoreCollection<Grupo>;
  grupo: Observable<Grupo[]>;
  grupoDoc: AngularFirestoreDocument<Grupo>;
  constructor(public afs: AngularFirestore) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.grupoCollection = this.afs.collection('grupo', ref => ref.orderBy('nome','asc'));
    this.grupo=this.afs.collection('grupo').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as Grupo;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getGrupo(){
    return this.grupo;
  }
  addGrupo(grupo:Grupo){
      this.grupoCollection.add(grupo);
  }

  
   deleteGrupo(grupo:Grupo){
      this.grupoDoc=this.afs.doc(`grupo/${grupo.id}`);
      this.grupoDoc.delete();
   }
   updateGrupo(grupo:Grupo){
     this.grupoDoc=this.afs.doc(`grupo/${grupo.id}`);
     this.grupoDoc.update(grupo);
   }
 
 
  
  }
