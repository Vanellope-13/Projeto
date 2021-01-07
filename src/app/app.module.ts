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

import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import { TelaPerfilDeUsuarioComponent } from './tela-perfil-de-usuario/tela-perfil-de-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaDeAcessoComponent } from './tela-de-acesso/tela-de-acesso.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
const routes: Routes = [
  {path : 'telaAtividades', component :TelaAtividadesComponent},
  {path : 'telaRad', component :TelaRadComponent},
  {path : 'telaPit', component :TelaPitComponent},
  {path : 'telaDeAcesso', component : TelaDeAcessoComponent},
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
    TelaDeAcessoComponent,
    TelaPitComponent,
    TelaRadComponent,
    TelaAtividadesComponent 
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
  providers: [UsuarioService, AtividadesService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
