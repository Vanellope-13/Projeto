import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {Usuario} from '../modelos/Usuario';
import {UsuarioService} from '../services/usuario.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  posicao1;
  posicao2;
  posicao3;
   posicao4;
  posicao5;
  link1;
  link2;
  entrarSair : boolean;

  tipo : string;
  constructor(  private afs : AngularFirestore, public router:Router,private afAuth : AngularFireAuth,public  usuarioService : UsuarioService) { }
  
  ngOnInit() {
  
  }
  linkPerfil(){
    this.router.navigate([ '/telaPerfilC']);
  
  }

  linkSair(){
    this.router.navigate([ '/telaloginC']);
  }
  linkSobreNos(){
    this.router.navigate([ '/sobreNosC']);
  }
  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
  }
  linkTelaDeAcesso(){
    this.router.navigate([ '/telaDeAcesso']);
  }
  linkTelaCadastro(){
    this.router.navigate([ '/telacadastroC']);
  }
  linkTelaAtividade(){
    this.router.navigate([ '/telaAtividades']);
  }
  openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0px';
  document.getElementById('main').style.marginLeft='0px';
}
//Essa função pega o array de nomes dos components para usar na navbar
async tipoDeUser(){
  

 this.usuarioService.pegarUser();
 
 var a=this.usuarioService.users;
if(a==1){
this.posicao1="Cadastro";
this.posicao2="Atividades";

}if(a==2){
  this.posicao1="PIT e RAD"

}if(a==3){
  
}
 return a  ;
}

funcao(posicao){
if(posicao=="PIT e RAD"){
 this.linkTelaDeAcesso()
}if(posicao=="Cadastro"){
  this.linkTelaCadastro()
 }if(posicao=="Atividades"){
  this. linkTelaAtividade()
 }
}
}
