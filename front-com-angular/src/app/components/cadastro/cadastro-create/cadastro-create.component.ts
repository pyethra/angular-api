import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

    cadastro: Cadastro = {
      email: ' ',
      CPF: ' ',
      nome: ' ',
      dataNasc: ' ',
      telefone: ' ',
  }
  
  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createCadastro(): void{
    this.cadastroService.create(this.cadastro).subscribe(() => {
    this.cadastroService.showMessege('Cadastro completo')
    })
  }
 
  cancelarCadastro(): void {
    this.router.navigate([''])
  }

  tabelasCadastro(): void {
    this.router.navigate(["/cadastro/tabela"])
  }

}
