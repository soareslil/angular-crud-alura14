import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Liliane Soares',
    modelo: ''
  }

  criarPensamento(){
    alert('novo pensamento');
    console.log('botao apertado')
  }

  cancelar(){

    alert('cancelando pensamento');
  }
}
