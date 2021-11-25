import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/cadastro"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {

  }
  showMessege(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: "bottom"
    })
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }


  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }

  readById(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.get<Cadastro>(url)
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  

}