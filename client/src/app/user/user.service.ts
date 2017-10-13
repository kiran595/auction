import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user.model';
import "rxjs/add/operator/map";


@Injectable()
export class UserService {

  private resourceUrl = 'http://localhost:9000/api/user';

  constructor(private http: Http) {

  }

  create(user: User) {
    return this.http.post(this.resourceUrl, user);
  }

  query() {
    console.log("query");
    return this.http.get(this.resourceUrl);
  }

  find(id: number) {
    // return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => res.json());
    // return this.http.get(this.resourceUrl+'/'+id).map((res: Response) => res.json());
  }

  update(user: User, id : number) {
    // return this.http.put(this.resourceUrl+'/'+id, user).map((res: Response) => res.json());;
  }

  delete(id: number) {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

}
