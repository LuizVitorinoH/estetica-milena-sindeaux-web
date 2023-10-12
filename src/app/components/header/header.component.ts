import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imagemUrl: string = 'assets/images/header/logo-estetica.png';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    let element = this.el.nativeElement.querySelector('header');
    if (window.pageYOffset > 10) { // Ajuste esse valor conforme necessário
      element.classList.add('header-scrolled');
    } else {
      element.classList.remove('header-scrolled');
    }
  }
}

