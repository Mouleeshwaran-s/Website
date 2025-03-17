import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private lenis!: Lenis;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object // Check if running in browser
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initSmoothScroll();
    }
  }

  private initSmoothScroll() {
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        smoothWheel: true,
        // smoothTouch: true,
        lerp: 0.1,
        wheelMultiplier: 1,
      });

      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      // Listen for scroll updates
      this.lenis.on('scroll', () => {
        console.log('Scrolling...');
      });
    });
  }
}
