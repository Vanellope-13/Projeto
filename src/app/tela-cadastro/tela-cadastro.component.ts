import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import {Usuario} from '../modeloDeUsuario/Usuario';
import {UsuarioService} from '../services/usuario.service';
@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
 

  usuarios: Usuario[];

  usuario:Usuario={
    tipoDeUser:'',
    email:'' ,
  senha :'' ,
  confirsenha : ''
  }
  constructor(private usuarioService: UsuarioService,public afAuth : AngularFireAuth) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      //console.log(items);
      this.usuarios=usuarios;
    });
  }

  

 async onSubmit(){
  if(this.usuario.tipoDeUser !='' && this.usuario.email !='' && this.usuario.senha !='' && this.usuario.confirsenha !='' ){
    const{usuario}= this
       if(usuario.senha !== usuario.confirsenha){
         
         return alert("As senhas não conferem");
       }
   try{
    const res = await this.afAuth.createUserWithEmailAndPassword( usuario.email, usuario.senha);
    this.usuarioService.addUsuario(this.usuario);
    this.usuario.tipoDeUser='';
    this.usuario.email='';
    this.usuario.senha='';
    this.usuario.confirsenha='';
    console.log(res)
    alert("Usuário cadastrado com sucesso!");
   } catch (error) { 
      console.error(error); 
      return alert(error);
    }
  
  
  }}


}


