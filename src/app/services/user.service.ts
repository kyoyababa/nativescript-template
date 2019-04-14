import { Injectable } from "@angular/core";

export class User {
  email: string | undefined;
  password: string | undefined;
}

@Injectable()
export class UserService {
  register(user: User) {
    alert("About to register: " + user.email);
  }
}
