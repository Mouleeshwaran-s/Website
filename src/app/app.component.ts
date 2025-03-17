import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LenisService } from './core/services/lenis.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private lenisService: LenisService) {}

  ngAfterViewInit(): void {
    this.lenisService.initLenis();
  }
}
