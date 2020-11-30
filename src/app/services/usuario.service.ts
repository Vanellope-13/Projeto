import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.usuariosCollection = this.afs.collection('usuarios');
    //this.usuarios=this.afs.collection('usuarios').valueChanges();
    this.usuarios = this.afs.collection('usuarios').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getUsuarios() {
    return this.usuarios;
  }
  getUsuario(id: string) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }
  addUsuario(usuario: Usuario) {
    this.usuariosCollection.add(usuario);
  }
  getAuth() {
   return this.afAuth.auth;
  }



}
