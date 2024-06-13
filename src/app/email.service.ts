import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailForm } from './home/home.component';

@Injectable({ providedIn: 'root' })
export class EmailService {

  private key: string = 'xbjnkapo';
  constructor(private readonly http: HttpClient) {

  }

  sendEmail({ name, email, message }: EmailForm): Observable<any> {
    let url = `https://formspree.io/f/${this.key}`;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    return this.http.post(url, data, httpOptions);
  }

}
