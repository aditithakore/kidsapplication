import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { DataServiceService } from '../dataservice.service';
import { VoiceService } from '../voice.service';
@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlphabetsPage implements OnInit {
  json:any;
  constructor(public navCtrl: NavController, public dataService: DataServiceService, private voiceService: VoiceService) { 
    addIcons({arrowBackOutline})
  }
  
  goBack(){
    this.navCtrl.back();
  }

  ngOnInit() {
 this.dataService.getAlphabets().subscribe(data => {this.json = data.alphabets});
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };

}
