
export class SignVo {
  private _name: string;
  private _email: string;
  private _password: string;

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  set password(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }
}
