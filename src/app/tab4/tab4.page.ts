import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {
  userName: string = 'hazy';
  userAge: number = 5; //
  favoriteColor: string = 'lavender';
  favoriteAnimalSound: string = 'bhaw 🐕';
  favoriteShape: string = 'Dodecagon ⭕'; //

  achievements: string[] = [
    'Color Master 🎓',
    'Number Ninja 🎓',
    'Shape Explorer 🎓',
    'Alphabet Champion 🎓',
  ];

  totalTasks = 10;
  completedTasks = 7;
  calculateCompletionPercentage(): number {
    return (this.completedTasks / this.totalTasks) * 100;
  }
  constructor() {}

  ngOnInit() {}
}
