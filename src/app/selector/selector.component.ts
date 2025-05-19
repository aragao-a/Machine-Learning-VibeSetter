import { Component, Output, EventEmitter } from '@angular/core';
import { Vibe } from '../vibe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector',
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

  @Output() vibeSelected = new EventEmitter<Vibe>();

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

  selectVibe(vibe: Vibe): void {

    this.vibeSelected.emit(vibe)
  }
}
