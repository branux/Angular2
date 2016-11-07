"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser'); //Suporte à browser
var http_1 = require('@angular/http'); //HTTP
var forms_1 = require('@angular/forms'); //Validação no Form
require('rxjs/add/operator/map');
var painel_module_1 = require('./painel/painel.module');
var foto_module_1 = require('./foto/foto.module');
var botao_module_1 = require('./botao/botao.module');
var modal_module_1 = require('./modal/modal.module');
var app_component_1 = require('./app.component');
var listagem_component_1 = require('./listagem/listagem.component');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routes_1.Routing,
                painel_module_1.PainelModule, foto_module_1.FotoModule, botao_module_1.BotaoModule, modal_module_1.ModalModule
            ],
            declarations: [
                app_component_1.AppComponent,
                listagem_component_1.ListagemComponent,
                cadastro_component_1.CadastroComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map