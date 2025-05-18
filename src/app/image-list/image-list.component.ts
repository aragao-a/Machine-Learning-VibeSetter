import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-image-list',
  imports: [NgFor],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent {

  images = 
  [
    {
      Title: 'Mão Aberta', 
      description: 'Escolher peça',
      url: "assets/openhand.jpg"
    },
    {
      Title: 'Mão Fechada', 
      description: 'Selecionar peça',
      url: 'assets/pickhand.jpg'
    },
    {
      Title: 'Posição Frame', 
      description: 'Resetar peças',
      url: 'assets/framehand.jpg'
    }]

}
