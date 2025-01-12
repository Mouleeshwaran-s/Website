import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
toCollection() {
  const obj : any = { collection_id : 1, collection_name : 'Hair' };
  sessionStorage.setItem('collection', JSON.stringify(obj));
  this.router.navigate(['/collections', obj.collection_name]);
}
  previousScrollPosition = 0;
  navbarHidden = false;
  mbNav = false;
  search: any = '';
  constructor(private loaderService: LoaderService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.previousScrollPosition = window.pageYOffset;
      this.onWindowScroll();
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      const totalWidth = window.innerWidth;
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.querySelector('.header') as HTMLElement | null;
      const mbNavbar = document.querySelector(
        '.marquee-text'
      ) as HTMLElement | null;
      const right = document.querySelector('.right') as HTMLElement | null;
      const navRight = document.querySelector('.navRight') as HTMLElement | null;
      const navleft = document.querySelector('.navleft') as HTMLElement | null;
      const left = document.querySelector('.left') as HTMLElement | null;
      // console.log('Current scroll sec:', currentScroll);
      if (right && left) {
        const ryt = right.offsetWidth;
        left.style.width = ryt + 'px';
      }
      if (navRight && navleft) {
        const ryt = navRight.offsetWidth;
        navleft.style.width = ryt + 'px';
      }
      if (totalWidth >= 992) {
        this.mbNav = true;
        if (currentScroll > this.previousScrollPosition) {
          this.navbarHidden = true;
        } else {
          this.navbarHidden = false;
        }
        if (navbar) {
          const nav = navbar.offsetHeight;
          if (currentScroll <= nav) {
            this.navbarHidden = true;
          }
        }
      } else {
        this.navbarHidden = true;
        if (currentScroll > this.previousScrollPosition) {
          this.mbNav = true;
        } else {
          this.mbNav = false;
          if (navRight && navleft) {
            const ryt = navRight.offsetWidth;
            navleft.style.width = ryt + 'px';
          }
        }
        if (mbNavbar) {
          const nav = mbNavbar.offsetHeight;
          if (currentScroll <= nav) {
            this.mbNav = true;
          }
        }
      }
      this.previousScrollPosition = currentScroll;
      // console.log(this.navbarHidden);
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.onWindowScroll();
  }
  private updateHeight(): void {
    const main = document.querySelector('.main') as HTMLElement | null;
    if (main) {
      const totalHeight = window.innerHeight;
      const navbarHeight = main;
    } else {
      console.error('Navbar or input bottom not found or not an HTMLElement');
    }
  }
  searchProduct(): void {
    this.loaderService.show();
    console.log('Search: ', this.search);
    setTimeout(() => {
      this.loaderService.hide();
    }, 5000);
  }
}
