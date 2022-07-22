import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-habi',
  templateUrl: './boton-habi.component.html',
  styleUrls: ['./boton-habi.component.css']
})
export class BotonHabiComponent implements OnInit {

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
