import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  // Function for signup form
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password

    };

    // Validates the input
    if (!this.validateService.validateRegister(user)) {
      console.log("Please fill all fields");
      return false;
    }

    // finally register the user
    this.authService.registerUser(user).subscribe(
       suc => {
        console.log("registered Successfully a5eeran :D");
            this.router.navigate(['/login']);

        },
        err => {
          console.log("Failed to register :(");
             this.router.navigate(['/register']);
        }
     );

  }


}
