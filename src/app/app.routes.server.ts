import { RenderMode, ServerRoute } from '@angular/ssr';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ActivatedRouteSnapshot } from '@angular/router';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
