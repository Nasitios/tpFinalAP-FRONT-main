import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-espa',
  templateUrl: './boton-espa.component.html',
  styleUrls: ['./boton-espa.component.css']
})
export class BotonEspaComponent implements OnInit {

  @Input() texto: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
