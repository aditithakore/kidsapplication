import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController  } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { DataServiceService } from '../dataservice.service';
import { VoiceService } from '../voice.service';
@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShapesPage implements OnInit {
  json:any;
  constructor(public navCtrl: NavController, public dataService: DataServiceService, private voiceService: VoiceService) {
    addIcons({arrowBackOutline})}
    goBack(){
      this.navCtrl.back();
    }
  ngOnInit() {
    this.dataService.getShapes().subscribe((data) => {
      this.json = data.shapes;
      console.log(this.json);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };

}
