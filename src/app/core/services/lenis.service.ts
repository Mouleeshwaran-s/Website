import { Injectable, NgZone } from '@angular/core';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  private lenis!: Lenis;

  constructor(private ngZone: NgZone) {}

  initLenis(): void {
    this.lenis = new Lenis({
      autoRaf: false, // We'll handle RAF manually
      smoothWheel: true, // Enables smooth scrolling for mouse wheel
      syncTouch: true,   // Correct replacement for smoothTouch
      gestureOrientation: 'vertical',
    });

    // Run Lenis inside Angular's zone to ensure smooth performance
    this.ngZone.runOutsideAngular(() => {
      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }

  getLenisInstance(): Lenis {
    return this.lenis;
  }
}
