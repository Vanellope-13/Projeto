import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
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
  openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
    document.getElementById('main').style.marginLeft='250px';
}
closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0px';
  document.getElementById('main').style.marginLeft='0px';
}
}
