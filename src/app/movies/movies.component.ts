import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MediaService:MediaService)
  {
    this.pages = new Array(10).fill('page').map((page, index) => index + 1);
  }

  trendingMovies:Media[] = [];
  term:string = '';
  spinner:boolean = false; 
  pages:number[] = [];


  ngOnInit(): void
  {
    this.getAllMovies(1);
    this._MediaService.userSearch.subscribe({
      next:(data:string) => this.term = data
    })
  }
  //Get all movies
  getAllMovies(currentPage:number)
  {
    this.spinner = false;
    this._MediaService.getAllTrending('movie', currentPage).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingMovies = data.results;
      }
    })
  }
}
