import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { environment } from '../environments/environment';

import {UsuarioService} from './services/usuario.service';
import {AtividadesService} from './services/atividades.service';
import {AulasService} from './services/aulas.service';
import {ApoioAoEnsinoService} from './services/apoio-ao-ensino.service';
import {PesquisaService} from './services/pesquisa.service';
import {ExtensaoService} from './services/extensao.service';
import {AdministrativoService} from './services/administrativo.service';

import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import { TelaPerfilDeUsuarioComponent } from './tela-perfil-de-usuario/tela-perfil-de-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
import { ListagemDeAtividadesComponent } from './listagem-de-atividades/listagem-de-atividades.component';
import { FinalizacaoDeEnvioComponent } from './finalizacao-de-envio/finalizacao-de-envio.component';
import { ListagemRADComponent } from './listagem-rad/listagem-rad.component';
const routes: Routes = [
  {path : 'finalizacaoRAD', component :  ListagemRADComponent },
  {path : 'finalizacao', component :  FinalizacaoDeEnvioComponent },
  {path : 'listagemC', component :  ListagemDeAtividadesComponent},
  {path : 'telaAtividades', component :TelaAtividadesComponent},
  {path : 'telaRad', component :TelaRadComponent},
  {path : 'telaPit', component :TelaPitComponent},
  {path : 'navbarC', component : NavbarComponent},
  {path : 'telaPerfilC', component : TelaPerfilDeUsuarioComponent},
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaSobreNosComponent,
    TelaPerfilDeUsuarioComponent,
    NavbarComponent,
    TelaPitComponent,
    TelaRadComponent,
    TelaAtividadesComponent,
    ListagemDeAtividadesComponent,
    FinalizacaoDeEnvioComponent,
    ListagemRADComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    AngularFireModule.initializeApp(environment.firebase ,'angularfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
   
  ],
  providers: [UsuarioService, AtividadesService,AulasService,ApoioAoEnsinoService,PesquisaService,ExtensaoService,AdministrativoService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
