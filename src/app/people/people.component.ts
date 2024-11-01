import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MediaService:MediaService) 
  {
    this.pages = new Array(10).fill('page').map((page1, index) => index + 1);
  }
  
  trendingPeople:Media[] = [];
  term:string = '';
  spinner:boolean = false;
  pages:number[] = [];
  

  ngOnInit(): void 
  {
    this.getAllPeople(1);
    this._MediaService.userSearch.subscribe({
      next:(data:string) => this.term = data
    })
  }
  //Get all people
  getAllPeople(currentPage:number)
  {
    this.spinner = false;
    this._MediaService.getAllTrending('person',currentPage).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.trendingPeople = data.results.filter((person:any)=> person.profile_path !==null);
      }
    })
  }
}
