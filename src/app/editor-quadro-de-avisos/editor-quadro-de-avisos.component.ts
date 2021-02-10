import { Component, OnInit } from '@angular/core';
import {AvisosService} from '../services/avisos.service';
import {Avisos} from '../modelos/avisos'
@Component({
  selector: 'app-editor-quadro-de-avisos',
  templateUrl: './editor-quadro-de-avisos.component.html',
  styleUrls: ['./editor-quadro-de-avisos.component.css']
})
export class EditorQuadroDeAvisosComponent implements OnInit {
  aviso:Avisos={
    aviso:'',
    
  }

  constructor(public avisosService:AvisosService) { }

  ngOnInit(): void {
    
    
  }
  postarAviso(){
    this.avisosService.addAviso(this.aviso);
  }

}
