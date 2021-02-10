import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {Usuario} from '../modelos/Usuario';
import {UsuarioService} from '../services/usuario.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import {EstadoDoPitService} from '../services/estado-do-pit.service';

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
  ArrayEstadoPit=[];

 
  constructor(  private afs : AngularFirestore, public router:Router,private afAuth : AngularFireAuth,public  usuarioService : UsuarioService,public estadoPit : EstadoDoPitService) { }
  
  ngOnInit() {
  

  }
  linkPerfil(){
    this.router.navigate([ '/telaPerfilC']);
  
  }
  linkTelalistagemPit(){
    this.router.navigate([ '/listagemDePit']);
  }
  linkTelalistagemRad(){
    this.router.navigate([ '/listagemDeRad']);
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
  linkTelaListagemPit(){
    this.router.navigate([ '/listagemC']);
  }
  linkTelaPit(){
    this.router.navigate([ '/telaPit']);
  }
  linkTelaRad(){
    this.router.navigate([ '/finalizacaoRAD']);
  }
  linkTelaPerfil(){
    this.router.navigate([ '/telaPerfilC']);
  }
  linkComentariosPit(){
    this.router.navigate([ '/comentariosPit']);
  }
  linkComentariosRad(){
    this.router.navigate([ '/comentariosRad']);
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
  this.posicao1="Perfil";
  this.posicao2="PIT";
  this.posicao3="RAD"
  this.posicao4="Comentários do Pit"
  this.posicao5="Comentários do Rad"
}if(a==3){
  this.posicao1="Plano Individual de Trabalho"
  this.posicao2="Relatório de Atividades Desenvolvidas"
}
 return a  ;
}

funcao(posicao){
if(posicao=="PIT"){
 
    this.linkTelaPit()

}if(posicao=="Cadastro"){
  this.linkTelaCadastro()
 }if(posicao=="Atividades"){
  this. linkTelaAtividade()
 }if(posicao=="RAD"){
  this.linkTelaRad()
 }if(posicao=="Perfil"){
  this.linkTelaPerfil()
}if(posicao=="Plano Individual de Trabalho"){
  this.linkTelalistagemPit()}

if(posicao=="Comentários do Pit"){
  this.linkComentariosPit()}
if(posicao=="Relatório de Atividades Desenvolvidas"){
  this.linkTelalistagemRad()
}if(posicao=="Comentários do Rad"){
  this.linkComentariosRad()}
}}