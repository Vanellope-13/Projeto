import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
   email: "";
   senha:"";
  constructor(public afAuth : AngularFireAuth, 
              public router:Router){

  }
 ngOnInit() {
  }


  async login(){

    const{ email, senha }= this
       try{
    const res = await this.afAuth.signInWithEmailAndPassword( email, senha);
      this.router.navigate([ '/telaPerfilC']);
    
   } catch (err) { 
      console.dir(err); 
      if(err.code==="auth/wrong-password"){
        return alert("Senha incorreta ou inválida!");
      }
      if(err.code==="auth/user-not-found"){
        return alert("Endereço de email incorreto,usuário não encontrado!");
      }
      if(err.code==="auth/argument-error"){
        return alert("Endereço de email em branco ou inválido!");
      }
      
    }
  }

}
  