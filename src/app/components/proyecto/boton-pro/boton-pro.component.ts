import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-pro',
  templateUrl: './boton-pro.component.html',
  styleUrls: ['./boton-pro.component.css']
})
export class BotonProComponent implements OnInit {

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
