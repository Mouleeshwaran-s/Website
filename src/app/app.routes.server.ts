import { RenderMode, ServerRoute } from '@angular/ssr';
import { CollectionsComponent } from './pages/collections/collections.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
