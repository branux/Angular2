import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meu-comp',
  templateUrl: './meu-comp.component.html',
  styleUrls: ['./meu-comp.component.css']
})
export class MeuCompComponent implements OnInit {

  constructor() {
    console.log("passou no construtor");
   }

  ngOnInit() {
    console.log("passou no init");
  }

}

