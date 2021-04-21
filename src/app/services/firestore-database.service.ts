import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router'
import { Pelicula } from '../clases/pelicula'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDatabaseService {

  movieCollection: AngularFirestoreCollection<Pelicula>;
  movies: Observable<Pelicula[]>
  moviesData: Pelicula[] = [];
  currentMovie: Pelicula[] = [];

  constructor(private db: AngularFirestore) { 
    this.movieCollection = db.collection("/movies");
    this.movies = this.movieCollection.valueChanges();
  }

  loadAll ():Pelicula[]{
    this.movies.subscribe(collectionItems =>{
      //console.log(collectionItems);
      this.moviesData = collectionItems;
    })
    return this.moviesData;
  }
}