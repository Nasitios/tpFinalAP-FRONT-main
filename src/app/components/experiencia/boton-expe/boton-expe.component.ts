import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-expe',
  templateUrl: './boton-expe.component.html',
  styleUrls: ['./boton-expe.component.css']
})
export class BotonExpeComponent implements OnInit {

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
