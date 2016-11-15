import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Suporte à browser
import { HttpModule } from '@angular/http'; //HTTP
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Validação no Form
import 'rxjs/add/operator/map';

import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routing } from './app.routes';


@NgModule({
    imports: [
        BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, 
        Routing,
        PainelModule, FotoModule, BotaoModule, ModalModule
    ],
    declarations: [
        AppComponent,
        ListagemComponent,
        CadastroComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }