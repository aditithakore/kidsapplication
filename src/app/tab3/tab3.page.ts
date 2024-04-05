import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab3Page {
  players: { name: string; score: number }[] = [
    { name: '1.Tom', score: 10 },
    { name: '2.Anna', score: 5 },
    { name: '3.Tae', score: 7 },
    { name: '4.Taylor', score: 5 },
    { name: '5.Joe', score: 4 },
    { name: '6.Suzy', score: 4 },
  ];
  constructor() {}
}
