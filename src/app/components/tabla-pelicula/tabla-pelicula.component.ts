import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas!: Pelicula[]
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(pelicula: Pelicula){
    console.log(pelicula)
    this.peliculaSeleccionada.emit(pelicula)
  }

}
