import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Vibe } from './vibe.model';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from "./webcam/webcam.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CommonModule, WebcamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selectedVibe: Vibe | null = null;

  onVibeChosen(vibe: Vibe) {

    console.log('Recebido no App componente', vibe)
    this.selectedVibe = vibe;
    
  }

  onCamVibeChosen(vibe: Vibe) {

    this.selectedVibe = vibe;
  }


}
