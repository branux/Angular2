import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron-app',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnUrl: string;
    private jbtBtnText: string;

    constructor() {
        this.jbtHeading = 'Título';
        this.jbtText = 'Texto descritivo com a classe jumbotron. Este é um exemplo com Bootstrap.';
        this.jbtBtnUrl = 'http://angular.io';
        this.jbtBtnText = 'Mais Detalhes';
    }
}