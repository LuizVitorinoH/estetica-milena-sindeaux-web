import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;
  videoUrl = 'assets/images/home/home-video-1.mp4';
  showText = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    AOS.init();
    setTimeout(() => {
      this.showText = true;
    }, 1000);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras ações
      console.log(this.contactForm.value);
    }
  }
}
