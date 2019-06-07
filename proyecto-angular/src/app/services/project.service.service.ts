import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { GlobalService } from '../services/global.service';  

@Injectable({
  providedIn: 'root'
})
export class Project.ServiceService {

  public url:string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = GlobalService.url;
  }
}
