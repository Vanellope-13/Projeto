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
  usuario : Usuario = {};
  usuarioId : string;
  usuarioSubscription : Subscription;
  entrarSair : boolean;

  constructor( private active : ActivatedRoute, private afs : AngularFirestore, public router:Router,private afAuth : AngularFireAuth,public  usuarioService : UsuarioService) { }

  ngOnInit() {


    //this.usuarioId ="3ht7U5MSo5PZEtR7E7nL";
    this.usuarioId =this.afAuth.auth.currentUser.uid;
  
   this.usuarioSubscription = this.usuarioService.getUsuario(this.usuarioId).subscribe(data => {
    this.usuario = data;
    return this.usuario.tipoDeUser;
     
   });
  
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

}
