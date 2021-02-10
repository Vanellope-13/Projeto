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
nome;
 users; 
  email:"";
   tipo:"";
  user:Usuario[];
  usuario :Usuario;
  tipoDeUser:"";
  
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
  getUsuarioEmail(email) {
 return this.usuariosCollection.doc<Usuario>(email).valueChanges();
  
  }
 
  getUsuario(id: string) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }
  addUsuario(usuario: Usuario) {
    this.usuariosCollection.add(usuario);
  }
  auth() {
   return this.afAuth.auth;
  }
 
 
  pegarUser(){
 
        
  
          this.getUsuarios().subscribe(usuario =>{
          this.user=usuario;
      
        for(var cont=0;cont<=this.user.length;cont++){
        
          if(this.user[cont].email==this.email){ 
       
           var tp=this.user[cont].tipoDeUser;
          
           this.nome=this.user[cont].nome;
           if(tp=="Administrador"){
            this.users=1;
           
           }  if(tp=="Professor"){
            this.users=2;
        
           
          }if(tp=="Coordenador"){
            this.users=3;
           }
          
           return tp;
          }}
          
         });   
}




}
