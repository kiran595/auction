import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http) { 

  }

  ngOnInit() {
  }

  onClick(cmd){
    if(cmd == "signin"){
      let data = {name: "saroj"};
      this.http.post("http://localhost/auction/mov.php",data)
      .subscribe((name)=>{console.log(name)})
    }
  }

}
