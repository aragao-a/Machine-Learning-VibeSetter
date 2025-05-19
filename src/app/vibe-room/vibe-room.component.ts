import { Component, Input } from '@angular/core';
import { Vibe } from '../vibe.model';

@Component({
  selector: 'app-vibe-room',
  imports: [],
  templateUrl: './vibe-room.component.html',
  styleUrl: './vibe-room.component.css'
})
export class VibeRoomComponent {

  @Input() vibe: Vibe | null = null;

}
