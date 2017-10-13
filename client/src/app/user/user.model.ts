export class User {
  public id?: number;
  public username?: string;


  constructor(id?: number,
              username?: string,) {
    this.id = id ? id : null;
    this.username = username ? username : null;
  }
}
