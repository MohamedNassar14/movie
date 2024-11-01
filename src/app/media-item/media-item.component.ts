import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../media';



@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() {}


  @Input() item!:Media;
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  ngOnInit(): void {


  }

}
