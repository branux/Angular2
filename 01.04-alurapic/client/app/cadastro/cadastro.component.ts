import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    mensagem: string = '';

    constructor(
        private service: FotoService,
        private route: ActivatedRoute,
        private router: Router,
        fb: FormBuilder
    ) {

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {
                this.service
                    .buscaPorId(id)
                    .subscribe(foto => {
                        this.foto = foto;
                    }, erro => console.log(log));
            }

        });


        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();

        this.service
            .cadastra(this.foto)
            .subscribe(res => {
                //this.foto = new FotoComponent();
                //console.log("Foto salva com sucesso!");
                this.mensagem = res.mensagem;
                if (!res.inclusao) {
                    this.router.navigate(['']);
                }
            }, erro => console.log(erro));
    }

}