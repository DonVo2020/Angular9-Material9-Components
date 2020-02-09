import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File) {

		/*
		const formdata: FormData = new FormData();
		formdata.append('file', file);

		const req = new HttpRequest('POST', '/upload', formdata, {
			reportProgress: true,
			responseType: 'text'
		});
		*/

    let url = "/upload";

    const body = new HttpParams()
      .set("name", file.name)
      .set("type", file.type);

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(url, body.toString(), options)
      .subscribe(
        res => { console.log("POST Request was successful: " + res) },
        err => { console.log("Error occurred: " + err.toString) });
  }
}
