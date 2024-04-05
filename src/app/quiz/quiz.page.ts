import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { DataServiceService } from '../dataservice.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class QuizPage implements OnInit {

  questions:any;
  // jsonData:any;
  selectedOption?: string;
  totalPoints = 0;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(public navCtrl: NavController, public toastController: ToastController, public dataService: DataServiceService) {
    addIcons({arrowBackOutline})
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  checkAnswer(question: any) {
    if (this.selectedOption === question.correct_answer) {
      this.totalPoints += 1; // Increment points for correct answer
      this.presentToast('Correct!'); // Display toast for correct answer
    } else {
      this.presentToast('Incorrect!'); // Display toast for incorrect answer
    }
    // Clear selected option for the next question
    this.selectedOption = '';
  }

  // constructor(public navCtrl:NavController) {
    
  //  }

  ngOnInit() {
    this.dataService.getQuestions().subscribe(data => {this.questions = data.questions; console.log(data);
    });
    console.log(this.questions);
    
  }

  goBack(){
    this.navCtrl.back();
  }
}
