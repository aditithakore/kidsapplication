import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,  NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { DataServiceService } from '../dataservice.service';
import { VoiceService } from '../voice.service';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ColorsPage implements OnInit {
  // json:any;
  constructor(public navCtrl: NavController, public dataService: DataServiceService, private voiceService: VoiceService) {
    addIcons({arrowBackOutline})
   }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }

}
