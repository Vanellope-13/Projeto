import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {Usuario} from '../modeloDeUsuario/usuario';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 

  usuariosCollection:AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  constructor(public afs: AngularFirestore) { 
    this.usuariosCollection=this.afs.collection('usuarios');
    //this.usuarios=this.afs.collection('usuarios').valueChanges();
    this.usuarios=this.afs.collection('usuarios').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data=a.payload.doc.data() as Usuario;
        data.id=a.payload.doc.id;
        return data;
      });
    });
  }
  getUsuarios(){
    return this.usuarios;
  }
  addUsuario(usuario:Usuario){
    this.usuariosCollection.add(usuario);
  }
}
