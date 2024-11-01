import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _MediaService:MediaService) 
  {
    this.pages = new Array(10).fill('page').map((page1, index) => index + 1);
  }

  trendingTv:Media[] = [];
  term:string = '';
  spinner:boolean = false;
  pages:number[] = [];

  //Get all tv
  ngOnInit(): void 
  {
    this.getAllTv(1);
    this._MediaService.userSearch.subscribe({
      next:(data:string) => this.term = data
    })
  }

  getAllTv(currentPage:number)
  {
    this.spinner = false;
    this._MediaService.getAllTrending('tv', currentPage).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingTv = data.results
      }
    })
  }
}
