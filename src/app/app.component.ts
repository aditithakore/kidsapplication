import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './dataservice.service';
import { VoiceService } from './voice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,HttpClientModule],
  providers: [DataServiceService, VoiceService]
})
export class AppComponent {
  constructor() {}
}
