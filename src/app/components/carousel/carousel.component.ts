import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  slides = [
    { image: '../../../assets/images/home/botox.png', text: 'Descrição da Imagem 1' },
    { image: '../../../assets/images/home/botox.png"', text: 'Descrição da Imagem 2' },
    // { image: 'url_da_imagem3.jpg', text: 'Descrição da Imagem 3' },
  ];
}
