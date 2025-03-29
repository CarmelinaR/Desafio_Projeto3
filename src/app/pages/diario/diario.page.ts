import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular'; // 🔹 Importação do Storage
import { RouterModule } from '@angular/router'; // ✅ Importação correta




@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule], // ✅ Adicione RouterModule
  providers: [Storage] // ✅ Adicionando o Storage nos providers do componente
})

export class DiarioPage {
  selectedDate: string = '';
  daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  emojis = ['😀', '😊', '😐', '😢', '😡', '😴', '😍',''];
  moodEntries: { [key: string]: { [key: string]: string } } = {};

  constructor(private storage: Storage) {
    this.initStorage(); // 🔹 Inicializa o Storage
  }

  async initStorage() {
    await this.storage.create();
    await this.loadData(); // 🔹 Garantindo que os dados sejam carregados antes de usar moodEntries
  }

  onDateChange(event: any) {
    if (event.detail.value) {
      this.selectedDate = event.detail.value;
    } else {
      this.selectedDate = new Date().toISOString().split('T')[0]; // Define um valor padrão
    }

    if (!this.moodEntries[this.selectedDate]) {
      this.moodEntries[this.selectedDate] = {};
    }
  }

  async saveMood(date: string, day: string, mood: string) {
    if (!this.moodEntries[date]) {
      this.moodEntries[date] = {};
    }
    this.moodEntries[date][day] = mood;
    await this.saveData(); // 🔹 Salva no Storage
  }

  async saveData() {
    await this.storage.set('diarioData', this.moodEntries);
  }

  async loadData() {
    const savedData = await this.storage.get('diarioData');
    if (savedData) {
      this.moodEntries = savedData;
    }
  }
}

