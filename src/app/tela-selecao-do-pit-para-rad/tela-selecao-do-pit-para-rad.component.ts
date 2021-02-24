import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
@Component({
  selector: 'app-tela-selecao-do-pit-para-rad',
  templateUrl: './tela-selecao-do-pit-para-rad.component.html',
  styleUrls: ['./tela-selecao-do-pit-para-rad.component.css']
})
export class TelaSelecaoDoPitParaRadComponent implements OnInit {

  email=this.usuarioService.email;
  ArrayPeriodos=[];
    constructor(public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
  
    ngOnInit(): void {
      this.periodoService.getPeriodo().subscribe(periodo =>{  
        this.ArrayPeriodos=periodo;
      });
    }

  
    irParaRad(ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo
  this.router.navigate([ '/telaRad']);
  
    }
    
}
