import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
    
  constructor(private authService:AuthService){}

    ngOnInit():void{
      console.log("123");
    }

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.getRawValue()).subscribe({
        next:async(response)=>{
          if(response.Token == null){

          }
          else{

          }
        },
        error: err=>{

        }
      })
    };
  };
  reloadPage(): void {
    window.location.reload();
  }
}
