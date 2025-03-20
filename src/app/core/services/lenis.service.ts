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
      autoRaf: false, // Manual RAF handling
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',

      // ✅ Prevent Lenis from interfering with inputs, selects, textareas, and custom elements
      prevent: (node) => {
        return (
          node.tagName === 'SELECT' ||
          node.tagName === 'TEXTAREA' ||
          node.tagName === 'INPUT' ||
          node.closest('[data-lenis-prevent]') !== null
        );
      },
    });

    // ✅ Run Lenis outside Angular for better performance
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
