import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs';
import { MediaService } from '../media.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _MediaService:MediaService, private _ActivatedRoute:ActivatedRoute) {}

  isLogin:boolean = false;
  menuStyle:string = '';


  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() != null)
        {
          this.isLogin = true;
        }
        else
        {
          this.isLogin = false
        }
      }
    })
  }
  logOut()
  {
    this._AuthService.signOut();
  }
  searchForMedia(event:any)
  {
    this._MediaService.userSearch.next(event.target.value);
  }
  openMenu()
  {
    this.menuStyle = '25%'
  }
  closeMenu()
  {
     this.menuStyle = '100%'
  }
}
