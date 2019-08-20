import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { GlobalService } from '../services/global.service';  


@Injectable()
export class ProjectService{
  public url: string;

  constructor(
    private _http: HttpClient
  ){
    this.url = GlobalService.url;
  }
  testService(){
    return "Probando el servicio de angular";
  }
  saveProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+ 'save-project', params, {headers: headers});
  }
}
