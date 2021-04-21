import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listadoPrincipal: Pelicula[];
  peliculaParaMostrar: Pelicula;

  constructor() {
    this.listadoPrincipal = [
      {id: 1, nombre: "Avatar", tipo: "Action", fechaDeEstreno: "09/23/2010", cantidadDePublico: "$2,787,965,087.00", fotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"},
      {id: 2, nombre: "The Simpsons Movie", tipo: "Animation", fechaDeEstreno: "07/27/2007", cantidadDePublico: "$527,068,851.00", fotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s3b8TZWwmkYc2KoJ5zk77qB6PzY.jpg"},
      {id: 3, nombre: "Neon Genesis Evangelion: The End of Evangelion", tipo: "Animation", fechaDeEstreno: "07/19/1997", cantidadDePublico: "$20,000,000.00", fotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m9PTii0XWCIKZBBrCrOn8RLTK0w.jpg"}
    ]
    this.peliculaParaMostrar = new Pelicula(666, "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson", "Animation", "08/30/2019", "$8,000,000.00", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j73LuQcA21KvkVFcroWWMN8tTJv.jpg");
   }

  ngOnInit(): void {
  }

  mostrarPelicula(pelicula: Pelicula){
    this.peliculaParaMostrar = pelicula;
  }

}
