import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import {UsuarioService} from './services/usuario.service';
import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
const routes: Routes = [
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'},
  {path : 'telaprincipalC', component : TelaPrincipalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaPrincipalComponent,
    TelaSobreNosComponent 
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
  providers: [UsuarioService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
