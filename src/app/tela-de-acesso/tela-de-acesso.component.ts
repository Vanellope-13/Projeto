import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-tela-de-acesso',
  templateUrl: './tela-de-acesso.component.html',
  styleUrls: ['./tela-de-acesso.component.css']
})
export class TelaDeAcessoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  linkTelaPit(){
    this.router.navigate([ '/telaPit']);
  }
  linkTelaRad(){
    this.router.navigate([ '/telaRad']);
  }
}
