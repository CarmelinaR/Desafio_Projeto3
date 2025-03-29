import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Importar o IonicModule para usar os componentes do Ionic
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.page.html',
  styleUrls: ['./evolucao.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],  // Adicionando IonicModule nos imports
})
export class EvolucaoPage {
  constructor(private router: Router) {}

  // Método para navegar para a página do diário
  navigateToDiario() {
    this.router.navigate(['/diario']);
  }
}
