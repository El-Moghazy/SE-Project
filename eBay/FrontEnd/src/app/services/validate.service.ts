import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.email == undefined || user.password == undefined)
      return false;
    return true;
  }

}
