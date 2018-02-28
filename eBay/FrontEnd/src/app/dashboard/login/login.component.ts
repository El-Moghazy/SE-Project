import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../services/toastr.service'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private toastr: ToastrService) { } // TODO: Replace toaster with flash card

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm: FormGroup = this.fb.group({
    username: this.username,
    password: this.password,
  });

  loginUser(formdata: any): void {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(data => {
          if (data.json().success === false) {
            // this.toastr.error(data.json().message); // TODO: Replace toaster with flash card
          } else {
            // this.toastr.success('Login successful.'); // TODO: Replace toaster with flash card
            this.router.navigate(['dashboard/items']);
          }
          this.loginForm.reset();
        });
    }
  }

  ngOnInit() {
  }

}
