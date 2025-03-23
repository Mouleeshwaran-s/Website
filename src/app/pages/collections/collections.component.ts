import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { ProductService } from '../../services/productservice';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Slider } from 'primeng/slider';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-collections',
  imports: [Breadcrumb,
    ButtonModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    Slider,
    InputIconModule, IconFieldModule, InputTextModule,
     ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
  providers: [ProductService]
})
export class CollectionsComponent implements OnInit {
  items: MenuItem[] | undefined;
  collection!: any;
  constructor(private productService: ProductService) { }
  sortBy: any[] | undefined;
  home: MenuItem | undefined;
  selectedCategories: any[] = [];
  categories: any[] = [
      { name: 'In Stock', key: 'A' },
      { name: 'Out of stock', key: 'M' },
  ];
  selectedOption: any | undefined ={name: 'Featured', code: 'manual'};
  rangeValues: number[] = [0, 1000];
  max: number = 1000;
  ngOnInit() {
    this.updateBallPosition();
    this.collection = JSON.parse(sessionStorage.getItem('collection')!);
    this.selectedCategories = [this.categories[1]];
    this.sortBy = [
      { name: 'Featured', code: 'manual' },
      { name: 'Best selling', code: 'best-selling' },
      { name: 'Alphabetically, A-Z', code: 'title-ascending' },
      { name: 'Alphabetically, Z-A', code: 'title-descending' },
      { name: 'Price, low to high', code: 'price-ascending' },
      { name: 'Price, high to low', code: 'price-descending' },
      { name: 'Date, old to new', code: 'created-ascending' },
      { name: 'Date, new to old', code: 'created-descending' }
    ];
    this.items = [
      { label: 'Collections' },
      { label: this.collection.collection_name },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  getvalue(){

  }
  scrollPercentage = 0;
  ballPosition!: number;
  windowHeight!: number;

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onScroll() {
    this.updateBallPosition();
  }

  updateBallPosition() {
    const ball = document.querySelector('.ball') as HTMLElement;
    if (ball) {
      const box = document.querySelector('.box') as HTMLElement;
      const boxWidth = box.clientWidth;

      // Get the ball's current vertical position relative to the viewport
      this.ballPosition = ball.getBoundingClientRect().top;
      this.windowHeight = window.innerHeight;
      this.scrollPercentage =100-((this.ballPosition / this.windowHeight) * 100 );

      // Calculate the horizontal position of the ball based on scroll percentage
      const ballMovementRange = boxWidth - ball.offsetWidth;  // Horizontal distance the ball can move
      const ballPositionX = (this.scrollPercentage / 100) * ballMovementRange;

      // Ensure the ball moves only within the boundaries of the box
      if (this.scrollPercentage >= 0 && this.scrollPercentage <= 100) {
        ball.style.left = `${ballPositionX}px`;
      }
    }
  }
}
