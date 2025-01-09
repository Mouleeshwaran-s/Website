import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly titleService = inject(Title);
  constructor() {
    this.titleService.setTitle('US');
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
