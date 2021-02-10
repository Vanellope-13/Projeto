import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finalizacao-de-envio',
  templateUrl: './finalizacao-de-envio.component.html',
  styleUrls: ['./finalizacao-de-envio.component.css']
})
export class FinalizacaoDeEnvioComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  perfil(){
    this.router.navigate([ '/quadroDeAvisos']);
  }
}
