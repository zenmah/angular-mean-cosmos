import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Script } from './script';

const api = '/api';

@Injectable()
export class ScriptService {

  constructor(private http: HttpClient) { }

  getScripts() {
    return this.http.get<Array<Script>>(`${api}/scripts`);
  }

  deleteScript(script: Script) {
    return this.http.delete(`${api}/script/${script._id}`);
  }

  addScript(script: Script) {
    return this.http.post<Script>(`${api}/script/`, script);
  }

  updateScript(script: Script) {
    return this.http.put<Script>(`${api}/script/${script._id}`, script);
  }
}
