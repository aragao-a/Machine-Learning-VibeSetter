import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ImageListComponent } from "./image-list/image-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ImageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tm-project-angular';
}
