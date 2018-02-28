import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../services/toastr.service'; // TODO: replace this
import { UserService } from '../../services/user.service';

function comparePassword(c: AbstractControl): {[key: string]: boolean} | null {
    let passwordControl = c.get('password');
    let confirmControl = c.get('retypepass');

    if (passwordControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'mismatchedPassword': true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
                private userService: UserService,
                private router: Router,
                private toastr: ToastrService) {}

  username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,12}$')]);
  retypepass = new FormControl('', [Validators.required]);



  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.username,
      passwordGroup: this.fb.group({
        password: this.password,
        retypepass: this.retypepass,
      }, {validator: comparePassword})
    });
  }

  registerUser(formdata:any): void {
    if (this.registerForm.dirty && this.registerForm.valid) {
      let theForm = this.registerForm.value;
      const thePass = this.registerForm.value.passwordGroup.password;
      theForm.password = thePass;
      delete theForm.passwordGroup;

      this.userService.register(theForm)
        .subscribe(data => {
          if (data.success === false) {
            // this.toastr.error(data.message); // TODO:
          } else {
            // this.toastr.success(data.message); // TODO:
            this.router.navigate(['/dashboard/login']);
          }
          this.registerForm.reset();
      });
    }
  }

}
