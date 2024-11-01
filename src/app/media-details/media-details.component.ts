import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { Media } from '../media';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

  constructor(private _MediaService:MediaService, private _ActivatedRoute:ActivatedRoute) {}

  mediaDetails!:Details;
  mediaSimilar:Media[] = [];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  media_type:string = '';
  spinner:boolean = false;


  ngOnInit(): void {
    let {id, mediaType} = this._ActivatedRoute.snapshot.params;
    this.media_type = mediaType;
    this.getAllMediaDetails(mediaType, id)
    this.getAllMediaSimilar(mediaType, id)
  }

  getAllMediaDetails(mediaType:string, id:number)
  {
    this.spinner = false;
    this._MediaService.getMediaDetails(mediaType, id).subscribe({
      next:(data)=>
      {
        this.spinner = true;
        this.mediaDetails = data
      }
    });
  }

  getAllMediaSimilar(mediaType:string, id:number)
  {
    this.spinner = false;
    this._MediaService.getSimilar(mediaType, id).subscribe({
      next:(data)=> 
      {
        this.spinner = true;
        this.mediaSimilar = data.results.filter((similar:Media)=> similar.poster_path !== null && similar.poster_path !== null).slice(0, 12);
      }
    })
  }

  getSimilar(mediaType:string, id:number)
  {
    this.spinner = false;
    this._MediaService.getMediaDetails(mediaType, id).subscribe({
      next:(response)=>
      {
        this.spinner = true;
        this.mediaDetails = response;
      }
    });

    this._MediaService.getSimilar(mediaType, id).subscribe({
      next:(response)=>
      {
        this.spinner = true;
        this.mediaSimilar = response.results.slice(0, 12).filter((similar:Media)=> similar.poster_path !== null && similar.poster_path !== null).slice(0, 12);
      }
    })
  }
 
}
