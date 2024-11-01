import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private _AuthService:AuthService, private _Router:Router) {}

    error:string = '';
    isLoading:boolean = false;

    registerForm:FormGroup = new FormGroup({
      first_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
      last_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
      age:new FormControl(null, [Validators.min(18), Validators.max(90), Validators.required]),
      email:new FormControl(null, [Validators.email, Validators.required]),
      password:new FormControl(null, [Validators.required])
    });
    submitRegisterForm(registerForm:FormGroup)
    {
       this.isLoading = true;
       this._AuthService.signUp(registerForm.value).subscribe({
        next:(response)=>{
        this.isLoading = false;
        if(response.message === 'success')
        {
           this._Router.navigate(['/login'])
        }
        else
        {
          this.error = response.message;
        }
       }})

    }

  ngOnInit(): void {
  
  }

}
