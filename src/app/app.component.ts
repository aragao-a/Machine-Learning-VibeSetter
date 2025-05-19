import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ImageListComponent } from "./image-list/image-list.component";
import { SelectorComponent } from "./selector/selector.component";
import { VibeRoomComponent } from './vibe-room/vibe-room.component';
import { Vibe } from './vibe.model';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from "./webcam/webcam.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SelectorComponent, VibeRoomComponent, CommonModule, WebcamComponent],
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
