import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
@Component({
  selector: 'app-escolha-do-pit',
  templateUrl: './escolha-do-pit.component.html',
  styleUrls: ['./escolha-do-pit.component.css']
})
export class EscolhaDoPitComponent implements OnInit {
  email=this.usuarioService.email;
ArrayPeriodos=[];
  constructor(public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.periodoService.getPeriodo().subscribe(periodo =>{  
      this.ArrayPeriodos=periodo;
    });
  }
  criarNovoPit(){
    this.router.navigate([ '/telaDeEscolhaDoPeriodo']);
  }

  irParaPit(ano,periodo){
this.periodoService.ano=ano;
this.periodoService.periodoPeriodo=periodo
this.router.navigate([ '/listagemC']);

  }
  
}
