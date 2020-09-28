import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
 
  email : string = "";
  senha : string = "";
  confirsenha : string = "";


  constructor(public afAuth : AngularFireAuth) { }

  ngOnInit(): void {
  }
  

  

  async cadastro(){

    const{ email, senha, confirsenha}= this
       if(senha !== confirsenha){
         return console.error("As senhas não conferem")
       }
   try{
    const res = await this.afAuth.createUserWithEmailAndPassword( email, senha);
    console.log(res)
   } catch (error) { 
      console.error(error); 
    }
  }
}
