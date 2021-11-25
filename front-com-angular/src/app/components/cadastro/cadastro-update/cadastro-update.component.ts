import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro!: Cadastro
  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'))
    this.cadastroService.readById(id).subscribe(cadastro => {
      this.cadastro = cadastro
    });
  }

  updateCadastro(): void {
    this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {
      this.cadastroService.showMessege('Cadastro atualizado')
      this.router.navigate(["/cadastro/tabela"])
    }
  }

  cancelarCadastro(): void {
    this.router.navigate(['/cadastro'])
  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }
}