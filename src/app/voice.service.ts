import { Injectable } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor() { }
  speak = async (toSpeak: string) => {
    await TextToSpeech.speak({
      text: toSpeak,
      lang: 'hi-IN',
      rate: 1.0,
      pitch: 0.5,
      volume: 1.0,
      category: 'ambient',
    });
  };
  stop = async () => {
    await TextToSpeech.stop();
  };
}
