import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  entradaActual: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  };




  constructor() { 
    
    this.entradaActual = {
      fecha: '03/09/2023',
      fechaTexto: '3 de Septiembre del 2023',
      texto: ''
    }



    
  }



  ngOnInit() {
  }



}
