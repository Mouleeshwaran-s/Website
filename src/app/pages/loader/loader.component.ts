import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  providers: [LoaderService]
})
export class LoaderComponent {
  color = 'primary';
  mode:any = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean>;

  constructor(private loaderService: LoaderService){
    this.isLoading = this.loaderService.isLoading;
  }
}
