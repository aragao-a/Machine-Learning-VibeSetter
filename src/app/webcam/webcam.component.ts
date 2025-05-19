import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as tmImage from '@teachablemachine/image';
import { Vibe } from '../vibe.model';

@Component({
  selector: 'app-webcam',
  imports: [],
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent implements OnInit{

  @Output() camVibeSelected = new EventEmitter<Vibe>();

  vibes: Vibe[] = [

    {
      name: 'Rainy Vibe',
      background: 'assets/images/rainy.png',
      audio: ''
    },
    {
      name: 'Fall Vibe',
      background: 'assets/images/fall.png',
      audio: ''
    },
    {
      name: 'Noon Vibe',
      background: 'assets/images/noon.png',
      audio: ''
    }
  ]

  model: any;
  webcam: any;
  labelContainer: HTMLElement | null = null;
  maxPredictions: number = 0;

  async ngOnInit(): Promise<void> {
    this.labelContainer = document.getElementById('label-container');
  }

  async init() {
    
    const URL = "https://teachablemachine.withgoogle.com/models/TtitrJ75C/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();

    const flip = true;
    this.webcam = new tmImage.Webcam(200, 200, flip);
    await this.webcam.setup();
    await this.webcam.play();
    window.requestAnimationFrame(() => this.loop());

    const webcamContainer = document.getElementById('webcam-container');
    webcamContainer?.appendChild(this.webcam.canvas);

    if (this.labelContainer) {
      for (let i = 0; i < this.maxPredictions; i++) {
        this.labelContainer.appendChild(document.createElement('div'));
      }
    }
  }

  async loop() {
    this.webcam.update();
    await this.predict();
    window.requestAnimationFrame(() => this.loop());
  }

  async predict() {

    const prediction = await this.model.predict(this.webcam.canvas);

    if (this.labelContainer) {

      for (let i = 0; i < this.maxPredictions; i++) {

        const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        (this.labelContainer.childNodes[i] as HTMLElement).innerText = classPrediction;

        if (prediction[i].probability > 0.97) {
          const vibe = this.vibes.find(v => v.name === prediction[i].className);
        if (vibe) {
          this.camVibeSelected.emit(vibe);
          }

        }
      }

    }

  }

  camSelectVibe(vibe: Vibe): void {

    this.camVibeSelected.emit(vibe)
  }

}
