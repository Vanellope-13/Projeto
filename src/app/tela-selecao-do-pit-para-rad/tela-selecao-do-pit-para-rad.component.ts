import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoRadService} from '../services/estado-do-rad.service'
@Component({
  selector: 'app-tela-selecao-do-pit-para-rad',
  templateUrl: './tela-selecao-do-pit-para-rad.component.html',
  styleUrls: ['./tela-selecao-do-pit-para-rad.component.css']
})
export class TelaSelecaoDoPitParaRadComponent implements OnInit {

  email=this.usuarioService.email;
  ArrayPeriodos=[];
  ArrayEstados=[];
  EstadoDoPeriodo=[];
    constructor(public estadoDoRadService:EstadoDoRadService,public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
  
    ngOnInit(): void {
      this.periodoService.getPeriodo().subscribe(periodo =>{  
        this.ArrayPeriodos=periodo;
       
      });

      this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{  

        this.ArrayEstados=estado;
        console.log(this.ArrayEstados)
      });
    }

  
    irParaRad(ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo
  this.router.navigate([ '/telaRad']);
  
    }

    pegarEstado(periodo){
    
if(this.ArrayEstados.length>0){
for(var cont=0;cont<=this.ArrayEstados.length;cont++){
if( periodo.ano==this.ArrayEstados[cont].ano && periodo.periodo==this.ArrayEstados[cont].periodo){

  var tamanho=this.ArrayPeriodos.length
  for(var cont=0;cont<=tamanho;cont++){
      if(periodo.ano==this.ArrayEstados[cont].ano && periodo.periodo==this.ArrayEstados[cont].periodo){
          return this.ArrayEstados[cont].aprovado
            
          
    }
        }  }

}
}else{
  return false
}

}




    



    }