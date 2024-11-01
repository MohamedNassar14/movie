import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _MediaService:MediaService) {}

  trendingMovies:Media[] = [];
  trendingTv:Media[] = [];
  trendingPeople:Media[] = [];
  term:string = '';
  spinner:boolean = false;

  
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTrendingTv();
    this.getTrendingPeople()
    this._MediaService.userSearch.subscribe({
      next:(data:string) => this.term = data
    })
  }
  //Get all movies
  getTrendingMovies()
  {
    this.spinner = false;
    this._MediaService.getAllTrending('movie', 1).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingMovies = data.results.slice(0,10);
      }
    })
  }
  //Get all tv
  getTrendingTv()
  {
    this.spinner = false;
    this._MediaService.getAllTrending('tv', 1).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingTv = data.results.slice(0,10);
      }
    })
  }
  //Get all people
  getTrendingPeople()
  {
    this.spinner = false;
    this._MediaService.getAllTrending('person', 1).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingPeople = data.results.filter((person:Media)=> person.profile_path !==null).slice(0,10)
      }
    })
  }
}

