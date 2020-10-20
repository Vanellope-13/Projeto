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
      this.router.navigate([ '/telaprincipalC']);
    
   } catch (err) { 
      console.dir(err); 
    }
  }
  linkSobreNos(){
    this.router.navigate([ '/sobreNosC']);
  }
}
