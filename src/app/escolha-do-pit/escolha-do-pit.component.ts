import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service'
@Component({
  selector: 'app-escolha-do-pit',
  templateUrl: './escolha-do-pit.component.html',
  styleUrls: ['./escolha-do-pit.component.css']
})
export class EscolhaDoPitComponent implements OnInit {
  email=this.usuarioService.email;
ArrayPeriodos=[];
ArrayEstados=[]
EstadoDoPeriodo=[]
  constructor(public router:Router,public estadoDoPitService:EstadoDoPitService,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.periodoService.getPeriodo().subscribe(periodo =>{  
      this.ArrayPeriodos=periodo;
   
    });
    this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{  
      this.ArrayEstados=estado;
   
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

  pegarEstado(periodo){
  
    var tamanho=this.ArrayPeriodos.length
for(var cont=0;cont<=tamanho;cont++){
    if(periodo.emailProfessor==this.ArrayEstados[cont].emailProfessor && periodo.ano==this.ArrayEstados[cont].ano && periodo.periodo==this.ArrayEstados[cont].periodo){
        return this.ArrayEstados[cont].aprovado
          
      }  
  }
  



}

  
}
